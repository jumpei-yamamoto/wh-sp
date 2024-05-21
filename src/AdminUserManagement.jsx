"use client";
import React from "react";
import AdminHeader from "./AdminHeader";

function AdminUserManagement() {
  const users = [
    { id: 1, name: "山田太郎", role: "管理者", status: "有効" },
    { id: 2, name: "佐藤花子", role: "ユーザー", status: "無効" },
  ];

  return (
    <div className="w-full h-full">
      <AdminHeader />
      <div className="p-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-roboto">ユーザー管理</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-roboto">
            ユーザーを追加
          </button>
        </div>
        <ul className="space-y-4">
          {users.map((user) => {
            const userDetailHref = `/user/${user.id}`;
            return (
              <li
                key={user.id}
                className="bg-gray-100 p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="font-roboto text-xl">{user.name}</p>
                  <p className="font-roboto text-sm">
                    役割: {user.role} | ステータス: {user.status}
                  </p>
                </div>
                <div className="space-x-4">
                  <a
                    href={userDetailHref}
                    className="text-blue-500 underline font-roboto"
                  >
                    詳細
                  </a>
                  <button className="bg-yellow-300 text-black px-2 py-1 rounded-md font-roboto">
                    編集
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AdminUserManagement;
