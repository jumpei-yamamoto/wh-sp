"use client";
import React from "react";
import AdminHeader from "./AdminHeader";

function AdminReportsAnalytics() {
  const reportList = ["利用状況レポート", "応募・採用統計", "ユーザー行動分析"];

  return (
    <div className="w-full h-full">
      <AdminHeader />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 font-roboto">
            レポート・分析
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {reportList.map((report, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold font-roboto">{report}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminReportsAnalytics;
