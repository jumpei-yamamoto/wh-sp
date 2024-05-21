"use client";
import React from "react";
import CompanyHeader from "./CompanyHeader";

function CompanyMessageManagement() {
  const messages = [
    {
      id: 1,
      sender: "田中太郎",
      date: "2023-01-01 10:00",
      preview: "これはメッセージプレビューです...",
    },
    {
      id: 2,
      sender: "鈴木一郎",
      date: "2023-01-02 14:30",
      preview: "こちらは別のメッセージプレビューです...",
    },
  ];

  const newMessage = true;

  const messageList = messages.map((message) => (
    <div key={message.id} className="bg-white rounded-lg shadow p-4 mt-2">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <span className="font-roboto">送信者: {message.sender}</span>
        <span className="font-roboto text-gray-500">
          受信日時: {message.date}
        </span>
      </div>
      <div className="text-gray-700 font-roboto">
        メッセージ: {message.preview}
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col w-full h-full p-4 bg-gray-100">
      <CompanyHeader />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-roboto">メッセージ管理</h1>
        {newMessage && (
          <div className="text-green-500 font-roboto">
            🆕 新しいメッセージがあります
          </div>
        )}
      </div>
      {messageList}
    </div>
  );
}

export default CompanyMessageManagement;
