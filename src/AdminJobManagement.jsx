"use client";
import React from "react";
import AdminHeader from "./AdminHeader";

function AdminJobManagement() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Innovate Ltd",
      status: "Inactive",
    },
    {
      id: 3,
      title: "Project Manager",
      company: "Business Solutions",
      status: "Active",
    },
  ];

  return (
    <div className="w-full h-full">
      <AdminHeader />
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-4 font-roboto">求人管理</h1>
          <div className="mb-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-roboto hover:bg-blue-600 mr-2">
              求人作成
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md font-roboto hover:bg-red-600 mr-2">
              求人削除
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md font-roboto hover:bg-green-600 mr-2">
              求人編集
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md font-roboto hover:bg-yellow-600">
              公開設定
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-roboto">求人一覧</h2>
            <ul>
              {jobs.map((job) => (
                <li key={job.id} className="mb-4 p-4 border rounded-md">
                  <h3 className="text-lg font-roboto">{job.title}</h3>
                  <p className="text-sm text-gray-600 font-roboto">
                    企業名: {job.company}
                  </p>
                  <p className="text-sm text-gray-600 font-roboto">
                    ステータス: {job.status}
                  </p>
                  <a
                    href={`.`}
                    className="text-blue-500 hover:underline font-roboto"
                  >
                    求人詳細
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminJobManagement;
