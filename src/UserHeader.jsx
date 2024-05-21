"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理
    navigate("/");
  };

  return (
    <nav className="bg-[#010101] text-white flex justify-between p-4">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold font-roboto">ロゴ</div>
        <Link to="/UserDashboard" className="font-bold">
          ダッシュボード
        </Link>
        <Link to="/UserProfileManagement" className="">
          プロフィール管理
        </Link>

        <Link to="/UserJobSearch" className="">
          求人検索
        </Link>
        <Link to="/UserApplicationManagement" className="">
          応募管理
        </Link>
        <Link to="/UserCoachingSection" className="">
          コーチング
        </Link>
      </div>
      <button onClick={handleLogout} className="font-bold">
        ログアウト
      </button>
    </nav>
  );
}

export default UserHeader;
