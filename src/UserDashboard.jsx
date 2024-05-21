"use client";
import React from "react";
import UserHeader from "./UserHeader";

function UserDashboard() {
  const userName = "山田 太郎";
  const applicationsCount = 5;
  const messagesCount = 10;
  const newJobsCount = 2;
  const activities = [
    "XYZ株式会社のソフトウェアエンジニアに応募しました。",
    "ABC株式会社との面接を予定しました。",
    "明日、鈴木さんとのコーチングセッションがあります。",
  ];

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <main className="flex flex-col flex-1 p-4 bg-[#f8f9fa]">
        <h1 className="text-2xl font-arial text-[#333] my-4">
          こんにちは、{userName}さん！
        </h1>
        <div className="bg-[#f8f9fa] border border-[#dee2e6] rounded-lg p-4 my-4">
          <h2 className="text-xl font-arial text-[#17a2b8]">
            応募数: {applicationsCount}
          </h2>
          <h2 className="text-xl font-arial text-[#28a745]">
            メッセージ数: {messagesCount}
          </h2>
          <h2 className="text-xl font-arial text-[#ffc107]">
            新しい求人: {newJobsCount}
          </h2>
        </div>
        <div className="flex flex-col">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#fff] border border-[#dee2e6] rounded-lg p-4 mb-4"
            >
              <p className="font-arial text-[#333]">{activity}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;
