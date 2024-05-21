"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CompanyHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理
    navigate("/");
  };

  return (
    <nav className="bg-[#010101] text-white flex justify-between p-4">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold font-roboto">ロゴ</div>
        <Link to="/CompanyDashboard" className="font-bold">
          ダッシュボード
        </Link>
        <Link to="/CompanyJobManagement" className="">
          求人管理
        </Link>
        <Link to="/CompanyApplicationManagement" className="">
          応募管理
        </Link>
        <Link to="/CompanyEngineerSearch" className="">
          エンジニア検索
        </Link>
        <Link to="/CompanyMessageManagement" className="">
          メッセージ管理
        </Link>
      </div>
      <button onClick={handleLogout} className="font-bold">
        ログアウト
      </button>
    </nav>
  );
}

export default CompanyHeader;
