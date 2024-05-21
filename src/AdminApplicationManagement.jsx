"use client";
import React from "react";
import AdminHeader from "./AdminHeader";

function AdminApplicationManagement() {
  const applications = [
    {
      applicantName: "山田 太郎",
      jobTitle: "ソフトウェアエンジニア",
      applicationDate: "2023年10月4日",
      status: "審査中",
    },
    {
      applicantName: "田中 花子",
      jobTitle: "データサイエンティスト",
      applicationDate: "2023年10月3日",
      status: "合格",
    },
  ];

  const [filteredApplications, setFilteredApplications] =
    React.useState(applications);

  const filterApplications = (status) => {
    if (status === "全応募") {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(
        applications.filter((app) => app.status === status)
      );
    }
  };

  return (
    <div className="w-full h-full">
      <AdminHeader />
      <div className="p-4 font-noto-sans">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">応募管理</h1>
          <div className="flex space-x-2 mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => filterApplications("全応募")}
            >
              全応募
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => filterApplications("審査中")}
            >
              審査中
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => filterApplications("合格")}
            >
              合格
            </button>
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => filterApplications("不合格")}
            >
              不合格
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredApplications.map((app, index) => (
            <div key={index} className="p-4 border rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{app.applicantName}</h2>
                  <p className="text-gray-600">{app.jobTitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">{app.applicationDate}</p>
                  <p
                    className={`text-${
                      app.status === "審査中"
                        ? "yellow-500"
                        : app.status === "合格"
                        ? "green-500"
                        : "red-500"
                    }`}
                  >
                    {app.status}
                  </p>
                </div>
              </div>
              <a href="." className="text-blue-500">
                詳細を見る
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminApplicationManagement;
