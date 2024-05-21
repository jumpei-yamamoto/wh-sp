"use client";
import React from "react";
import AdminHeader from "./AdminHeader";

function AdminMessageManagement() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const messages = [
    {
      sender: "山田太郎",
      recipient: "鈴木花子",
      preview: "メッセージのプレビュー内容メッセージのプレビュー内容...",
      date: "2023-10-01 10:00",
    },
    {
      sender: "佐藤次郎",
      recipient: "高橋幸子",
      preview: "メッセージのプレビュー内容メッセージのプレビュー内容...",
      date: "2023-10-02 09:30",
    },
  ];

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.includes(searchTerm) ||
      message.recipient.includes(searchTerm) ||
      message.preview.includes(searchTerm) ||
      message.date.includes(searchTerm)
  );

  return (
    <div className="w-full h-full">
      <AdminHeader />
      <div className="p-4 font-roboto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="メッセージの検索"
            className="w-full p-2 border border-gray-300 rounded"
            name="searchBar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          {filteredMessages.map((message, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded">
              <div className="font-bold">送信者: {message.sender}</div>
              <div className="font-semibold">受信者: {message.recipient}</div>
              <div className="text-gray-600">{message.preview}</div>
              <div className="text-gray-500 text-sm">{message.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminMessageManagement;
