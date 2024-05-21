"use client";
import React from "react";
import CompanyHeader from "./CompanyHeader";

function EmployerDashboard() {
  const companyName = "企業名";
  const jobListings = 10;
  const applications = 25;
  const newMessages = 5;
  const activities = [
    "新しい求人: フロントエンドエンジニア",
    "応募受け取り: ジョン・ドー",
    "メッセージ送信: 田中 太郎",
  ];

  return (
    <div className="font-roboto h-screen flex flex-col">
      <CompanyHeader />
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl">こんにちは、{companyName}様！</h1>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">現在の求人</h2>
            <p className="text-2xl">{jobListings}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">応募数</h2>
            <p className="text-2xl">{applications}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg">新しいメッセージ</h2>
            <p className="text-2xl">{newMessages}</p>
          </div>
        </div>
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-lg">最近のアクティビティ</h2>
          <ul className="list-disc list-inside space-y-2">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default EmployerDashboard;
