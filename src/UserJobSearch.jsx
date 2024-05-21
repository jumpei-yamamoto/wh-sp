"use client";
import React from "react";
import UserHeader from "./UserHeader";

function UserJobSearch() {
  return (
    <div className="w-full h-full">
      <UserHeader />
      <div className="flex">
        <div className="w-[300px] p-4 border-r border-gray-200">
          <div className="border-b border-gray-200 p-4 font-['Arial'] text-[#333] text-2xl">
            フィルターオプション
          </div>
          <div className="p-4">
            <label className="block font-['Arial'] text-[#333] text-2xl pb-2">
              勤務地
            </label>
            <input
              name="location"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="p-4">
            <label className="block font-['Arial'] text-[#333] text-2xl pb-2">
              給与
            </label>
            <input name="salary" type="range" className="w-full" />
          </div>
          <div className="p-4">
            <label className="block font-['Arial'] text-[#333] text-2xl pb-2">
              雇用形態
            </label>
            <select
              name="jobType"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>フルタイム</option>
              <option>パートタイム</option>
            </select>
          </div>
          <div className="p-4">
            <label className="block font-['Arial'] text-[#333] text-2xl pb-2">
              会社の規模
            </label>
            <select
              name="companySize"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option>小規模</option>
              <option>中規模</option>
              <option>大規模</option>
            </select>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="mb-4">
            <input
              name="search"
              type="text"
              placeholder="求人を検索..."
              className="w-full p-2 border border-gray-300 rounded-md font-['Arial'] text-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-['Arial'] text-[#007bff] text-[18px] mb-1">
                ソフトウェア開発者
              </h2>
              <p className="font-['Arial'] text-[#333] text-[16px]">
                テック会社
              </p>
              <p className="font-['Arial'] text-[#666] text-[14px]">
                東京都, 日本
              </p>
              <p className="font-['Arial'] text-[#28a745] text-[14px]">
                ¥10,000,000 - ¥12,000,000
              </p>
              <a
                href="."
                className="inline-block bg-[#007bff] text-white p-2 rounded-md font-['Arial'] text-[14px] mt-2"
              >
                詳細を見る
              </a>
            </div>

            <div className="p-4 border-b border-gray-200">
              <h2 className="font-['Arial'] text-[#007bff] text-[18px] mb-1">
                マーケティングスペシャリスト
              </h2>
              <p className="font-['Arial'] text-[#333] text-[16px]">
                クリエイティブエージェンシー
              </p>
              <p className="font-['Arial'] text-[#666] text-[14px]">
                大阪府, 日本
              </p>
              <p className="font-['Arial'] text-[#28a745] text-[14px]">
                ¥6,000,000 - ¥8,000,000
              </p>
              <a
                href="."
                className="inline-block bg-[#007bff] text-white p-2 rounded-md font-['Arial'] text-[14px] mt-2"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserJobSearch;
