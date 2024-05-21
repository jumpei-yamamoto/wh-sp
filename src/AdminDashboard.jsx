"use client";
import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const adminName = "admin名";

  return (
    <div className="w-full h-full">
      <nav className="bg-[#010101] text-white flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold font-roboto">ロゴ</div>
          <Link to="/AdminDashboard" className="font-bold">
            ダッシュボード
          </Link>
          <Link to="/AdminUserManagement" className="">
            ユーザー管理
          </Link>
          <Link to="/AdminJobManagement" className="">
            求人管理
          </Link>
          <Link to="/AdminApplicationManagement" className="">
            応募管理
          </Link>
          <Link to="/AdminMessageManagement" className="">
            メッセージ管理
          </Link>
          <Link to="/AdminReportsAnalytics" className="">
            レポート・分析
          </Link>
        </div>
        <button className="font-bold">ログアウト</button>
      </nav>

      <div className="p-6 space-y-6">
        <div className="text-2xl font-crimson-text">
          こんにちは、{adminName}さん！
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#f3f3f3] p-4 text-center font-roboto">
            ユーザー数: 100
          </div>
          <div className="bg-[#f3f3f3] p-4 text-center font-roboto">
            企業数: 50
          </div>
          <div className="bg-[#f3f3f3] p-4 text-center font-roboto">
            求人数: 75
          </div>
          <div className="bg-[#f3f3f3] p-4 text-center font-roboto">
            応募数: 120
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg">
          <h2 className="text-xl font-roboto mb-4">最近の管理アクティビティ</h2>
          <ul className="space-y-2">
            <li className="text-sm font-roboto">
              ユーザー追加: Yamadaさんを追加しました。
            </li>
            <li className="text-sm font-roboto">
              求人更新: Software Engineerの求人を更新しました。
            </li>
            <li className="text-sm font-roboto">
              応募処理: Satoさんの応募を処理しました。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
