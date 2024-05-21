"use client";
import React from "react";
import UserHeader from "./UserHeader";

function UserApplicationManagement() {
  const statuses = {
    applied: "#007bff",
    interviewScheduled: "#ffc107",
    offerReceived: "#28a745",
    declined: "#dc3545",
  };

  const applications = [
    {
      title: "ソフトウェア開発者",
      company: "ABC会社",
      date: "2023-08-15",
      status: "applied",
    },
    {
      title: "プロダクトマネージャー",
      company: "XYZ株式会社",
      date: "2023-08-18",
      status: "interviewScheduled",
    },
    {
      title: "UXデザイナー",
      company: "クリエイティブラボ",
      date: "2023-08-20",
      status: "offerReceived",
    },
    {
      title: "マーケティングスペシャリスト",
      company: "マーケティング株式会社",
      date: "2023-08-22",
      status: "declined",
    },
  ];

  const [filter, setFilter] = React.useState("");

  const filteredApplications = filter
    ? applications.filter((app) => app.status === filter)
    : applications;

  const statusLabels = {
    applied: "応募済み",
    interviewScheduled: "面接予定",
    offerReceived: "内定受領",
    declined: "辞退",
  };

  return (
    <div className="w-full h-full">
      <UserHeader />
      <div className="p-6">
        <div>
          <h2 className="text-2xl font-roboto mb-4">応募管理</h2>

          <div className="mb-6">
            <h3 className="text-xl font-roboto mb-2">ステータスフィルター</h3>
            <div className="flex space-x-4">
              {Object.keys(statuses).map((status) => (
                <button
                  key={status}
                  className="text-lg font-roboto text-[#333] px-4 py-2 border-b border-[#eee]"
                  onClick={() => setFilter(status)}
                >
                  {statusLabels[status]}
                </button>
              ))}
              <button
                className="text-lg font-roboto text-[#333] px-4 py-2 border-b border-[#eee]"
                onClick={() => setFilter("")}
              >
                すべて
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-roboto mb-4">応募ステータス一覧</h3>
            <div className="space-y-4">
              {filteredApplications.map((app, index) => (
                <div key={index} className="p-4 border-b border-[#eee]">
                  <div className="text-lg font-[Arial] text-[#007bff] my-1">
                    {app.title}
                  </div>
                  <div className="text-base font-[Arial] text-[#333]">
                    {app.company}
                  </div>
                  <div className="text-sm font-[Arial] text-[#666]">
                    {app.date}
                  </div>
                  <div
                    style={{ color: statuses[app.status] }}
                    className="text-sm font-[Arial]"
                  >
                    {statusLabels[app.status]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserApplicationManagement;
