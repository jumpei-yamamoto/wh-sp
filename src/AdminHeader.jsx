"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理
    navigate("/");
  };

  return (
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
      <button onClick={handleLogout} className="font-bold">
        ログアウト
      </button>
    </nav>
  );
}

export default AdminHeader;
