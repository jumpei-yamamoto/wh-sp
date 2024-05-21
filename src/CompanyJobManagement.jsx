"use client";
import React from "react";
import CompanyHeader from "./CompanyHeader";

function CompanyJobManagement() {
  const jobList = [
    {
      id: 1,
      title: "求人タイトル1",
      location: "東京",
      status: "募集中",
      link: "#",
    },
    {
      id: 2,
      title: "求人タイトル2",
      location: "大阪",
      status: "募集終了",
      link: "#",
    },
  ];

  const jobItems = jobList.map((job) => (
    <div
      key={job.id}
      className="p-4 bg-gray-100 shadow rounded flex justify-between items-center"
    >
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p>勤務地: {job.location}</p>
        <p>ステータス: {job.status}</p>
      </div>
      <a href={job.link} className="text-blue-500">
        詳細を見る
      </a>
    </div>
  ));

  return (
    <div className="w-full h-full">
      <CompanyHeader />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">求人管理</h1>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
              新しい求人を作成する
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded">
              既存の求人を編集する
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">求人一覧</h2>
          <div className="space-y-4">{jobItems}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyJobManagement;
