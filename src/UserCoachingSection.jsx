"use client";
import React from "react";
import UserHeader from "./UserHeader";

function UserCoachingSection() {
  const coaches = [
    {
      photo: "/coach1.jpeg",
      name: "コーチA",
      specialization: "キャリアコーチング",
      reviews: "★★★★★",
    },
    {
      photo: "/coach2.jpeg",
      name: "コーチB",
      specialization: "ライフコーチング",
      reviews: "★★★★",
    },
  ];

  const pastSessions = [
    {
      date: "2023-09-01",
      coachName: "コーチA",
      summary: "キャリア目標と戦略について話し合いました。",
    },
    {
      date: "2023-08-15",
      coachName: "コーチB",
      summary: "生活バランスとマインドについて相談しました。",
    },
  ];

  const availableDatesTimes = ["2023-09-10T10:00", "2023-09-11T14:00"];

  const handleBookSession = () => {
    const url = `https://temp-tutor.web.app/`;
    window.open(url, "_blank"); // 新しいタブで通話ページを開く
  };

  return (
    <div className="w-full h-full">
      <UserHeader />
      <div className="p-5">
        <h2 className="font-roboto text-2xl mb-4">コーチングサポート</h2>

        <div className="mb-8">
          <h3 className="font-roboto text-xl mb-2">コーチリスト</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="flex items-center p-4 border rounded-lg shadow-md"
              >
                <img
                  src={coach.photo}
                  alt={`${coach.name}`}
                  className="w-[100px] h-[100px] rounded-full mr-4"
                />
                <div>
                  <div className="font-roboto text-[18px] text-[#333] mb-1">
                    {coach.name}
                  </div>
                  <div className="font-roboto text-[16px] text-[#555] mb-1">
                    {coach.specialization}
                  </div>
                  <div className="font-roboto text-[14px] text-[#777]">
                    {coach.reviews}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-roboto text-xl mb-2">スケジュール管理</h3>
          <div className="mb-4">
            <span className="font-roboto text-[16px] text-[#333]">
              利用可能な日時:
            </span>
            <select
              className="mt-2 p-2 border rounded"
              name="availableDatesTimes"
            >
              {availableDatesTimes.map((dateTime) => (
                <option key={dateTime} value={dateTime}>
                  {new Date(dateTime).toLocaleString()}
                </option>
              ))}
            </select>
          </div>
          <button
            className="font-roboto text-[14px] text-white bg-[#007bff] px-4 py-2 rounded"
            onClick={handleBookSession}
          >
            セッションを予約
          </button>
        </div>

        <div>
          <h3 className="font-roboto text-xl mb-2">セッション履歴</h3>
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div
                key={session.date}
                className="p-4 border rounded-lg shadow-md"
              >
                <div className="font-roboto text-[16px] text-[#333] mb-1">
                  日付: {session.date}
                </div>
                <div className="font-roboto text-[16px] text-[#333] mb-1">
                  コーチ: {session.coachName}
                </div>
                <div className="font-roboto text-[16px] text-[#333]">
                  概要: {session.summary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCoachingSection;
