"use client";

import { useState, useEffect } from "react";
import style from "./inquiry.module.css";
import { useRouter } from "next/navigation";

export default function Inquiry() {
  interface CheckboxOption {
    id: string;
    label: string;
    value: string;
  }

  const services: CheckboxOption[] = [
    {
      id: "homeCleaning",
      label: "입주 청소 - 신축 건물 입주 시",
      value: "입주 청소",
    },
    {
      id: "moveCleaning",
      label: "이사 청소 - 이전 거주자가 만든 각종 때, 먼지청소",
      value: "이사 청소",
    },
    {
      id: "residentCleaning",
      label: "거주중인 공간을 말끔하게 청소",
      value: "거주 청소",
    },
    {
      id: "remodelingCleaning",
      label: "리모델링 후 청소",
      value: "리모델링 후 청소",
    },
    { id: "constructionCleaning", label: "준공 청소", value: "준공 청소" },
    { id: "storeCleaning", label: "상가 청소", value: "상가 청소" },
    { id: "officeCleaning", label: "오피스 청소", value: "오피스 청소" },
    { id: "otherService", label: "기타", value: "기타" },
  ];

  const buildingTypes = [
    "아파트",
    "빌라 / 연립주택",
    "오피스텔",
    "단독주택",
    "사무실 / 상가",
    "기타",
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [structure, setStructure] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otherService, setOtherService] = useState<string>("");
  const [buildingType, setBuildingType] = useState<string>("");
  const [otherBuilding, setOtherBuilding] = useState<string>("");
  const [todayDate, setTodayDate] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setTodayDate(formattedDate);
  }, []);

  const handleBuildingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuildingType(e.target.value);
    if (e.target.value !== "기타") {
      setOtherBuilding("");
    }
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices((prev) => [...prev, value]);
    } else {
      setSelectedServices((prev) =>
        prev.filter((service) => service !== value)
      );
    }
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const selected = selectedServices.includes("기타")
      ? [...selectedServices, `기타: ${otherService}`]
      : selectedServices;

    const emailData = {
      subject: "문의 요청 드립니다.",
      sender: { email: process.env.NEXT_PUBLIC_FROM_USER_EMAIL },
      to: [{ email: process.env.NEXT_PUBLIC_TO_USER_EMAIL }],
      htmlContent: `
          <h1>청소 문의 정보</h1>
          <p><strong>이름:</strong> ${name}</p>
          <p><strong>연락처:</strong> ${phone}</p>
          <p><strong>청소 지역:</strong> ${region}</p>
          <p><strong>평수, 방, 화장실, 베란다 구조:</strong> ${structure}</p>
          <p><strong>선택된 서비스:</strong> ${selected.join(", ")}</p>
          <p><strong>선택된 건물 유형:</strong> ${buildingType}${
        buildingType === "기타" ? ` - ${otherBuilding}` : ""
      }</p>
          <p><strong>청소 희망일:</strong> ${todayDate}</p>
        `,
    };

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY || "",
        }),
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("폼이 제출되었습니다! 이메일이 발송되었습니다.");
        router.push("/");
      } else {
        const errorData = await response.json();
        alert("이메일 발송에 실패했습니다.");
      }
    } catch (error) {
      alert("서버 오류로 인해 이메일 발송에 실패했습니다.");
    }
  };

  return (
    <section className={style.inquiryContainer}>
      <h2>
        <strong>유니클린텍 청소 문의하기</strong>
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <h4>이름을 입력해주세요</h4>
            <input
              type="text"
              value={name}
              placeholder="김현수"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <h4>연락처를 입력해주세요</h4>
            <input
              type="text"
              value={phone}
              placeholder="010-xxxx-xxxx"
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={15}
            />
          </div>

          <div>
            <h4>청소 지역 입력 (시/도, 구/군, 동)</h4>
            <input
              type="text"
              value={region}
              placeholder="서울특별시 강서구 화곡동 xxx-xx , 000호"
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </div>

          <div>
            <h4>평수, 방, 화장실, 베란다 구조는 어떻게 되실까요?</h4>
            <input
              type="text"
              value={structure}
              placeholder="25평 , 방3 ,화2 , 베란다2 (공급면적 기준으로 말씀해주셔야 합니다)"
              onChange={(e) => setStructure(e.target.value)}
              required
            />
          </div>

          <div>
            <h4>어떤 서비스를 원하시나요?</h4>
            <div className={style.checkboxGroup}>
              {services.map(({ id, label, value }) => (
                <div key={id} className={style.checkboxItem}>
                  <input
                    type="checkbox"
                    id={id}
                    value={value}
                    onChange={handleServiceChange}
                  />
                  <label htmlFor={id}>{label}</label>
                  {id === "otherService" &&
                    selectedServices.includes("기타") && (
                      <input
                        type="text"
                        placeholder="기타 서비스를 입력해주세요"
                        value={otherService}
                        onChange={(e) => setOtherService(e.target.value)}
                        className={style.etcItem}
                        required
                      />
                    )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>어떤 건물인가요?</h4>
            <div className={style.radioGroup}>
              {buildingTypes.map((type) => (
                <div key={type} className={style.radioItem}>
                  <input
                    type="radio"
                    id={type}
                    name="buildingType"
                    value={type}
                    onChange={handleBuildingChange}
                    required
                  />
                  <label htmlFor={type}>{type}</label>
                  {type === "기타" && buildingType === "기타" && (
                    <input
                      type="text"
                      placeholder="기타 건물 유형을 입력해주세요"
                      value={otherBuilding}
                      onChange={(e) => setOtherBuilding(e.target.value)}
                      className={style.etcItem}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4>청소 희망일을 선택해주세요</h4>
            <input
              type="date"
              value={todayDate}
              min={todayDate}
              onChange={(e) => setTodayDate(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit">제출</button>
      </form>
    </section>
  );
}
