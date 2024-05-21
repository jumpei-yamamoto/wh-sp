"use client";
import React from "react";
import CompanyHeader from "./CompanyHeader";

function CompanyApplicationManagement() {
  const applicants = [
    {
      name: "山田 太郎",
      skills: "JavaScript, React",
      date: "2023-10-01",
      status: "未対応",
    },
    {
      name: "田中 花子",
      skills: "Python, Django",
      date: "2023-10-02",
      status: "面接予定",
    },
    {
      name: "佐藤 次郎",
      skills: "Java, Spring Boot",
      date: "2023-10-03",
      status: "オファー送信",
    },
    {
      name: "鈴木 一郎",
      skills: "C++, Unreal Engine",
      date: "2023-10-04",
      status: "採用",
    },
    {
      name: "山下 三郎",
      skills: "Ruby, Rails",
      date: "2023-10-05",
      status: "辞退",
    },
  ];

  const [filter, setFilter] = React.useState("全て");
  const filteredApplicants =
    filter === "全て"
      ? applicants
      : applicants.filter((applicant) => applicant.status === filter);

  return (
    <div className="w-full h-full">
      <CompanyHeader />
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded p-6">
          <h1 className="text-2xl font-bold mb-4 font-crimson-text">
            応募者一覧
          </h1>
          <div className="space-y-4">
            {filteredApplicants.map((applicant, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 shadow rounded"
              >
                <div>
                  <h2 className="text-lg font-semibold font-roboto">
                    {applicant.name}
                  </h2>
                  <p className="text-sm text-gray-600 font-roboto">
                    {applicant.skills}
                  </p>
                  <p className="text-xs text-gray-500 font-roboto">
                    応募日: {applicant.date}
                  </p>
                </div>
                <a href="." className="text-blue-500 font-roboto">
                  応募詳細
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4 font-crimson-text">
            ステータスフィルター
          </h2>
          <ul className="space-x-4 flex">
            <li>
              <button
                onClick={() => setFilter("未対応")}
                className="px-4 py-2 bg-gray-200 rounded font-roboto"
              >
                未対応
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("面接予定")}
                className="px-4 py-2 bg-gray-200 rounded font-roboto"
              >
                面接予定
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("オファー送信")}
                className="px-4 py-2 bg-gray-200 rounded font-roboto"
              >
                オファー送信
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("採用")}
                className="px-4 py-2 bg-gray-200 rounded font-roboto"
              >
                採用
              </button>
            </li>
            <li>
              <button
                onClick={() => setFilter("辞退")}
                className="px-4 py-2 bg-gray-200 rounded font-roboto"
              >
                辞退
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyApplicationManagement;
