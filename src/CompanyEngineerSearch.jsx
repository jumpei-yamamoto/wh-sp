"use client";
import React from "react";
import CompanyHeader from "./CompanyHeader";

function CompanyEngineerSearch() {
  const engineers = [
    {
      name: "エンジニアの名前1",
      skills: "React, Node.js",
      experience: "5年",
      link: "#",
    },
    {
      name: "エンジニアの名前2",
      skills: "Python, Django",
      experience: "3年",
      link: "#",
    },
  ];

  const engineerList = engineers.map((engineer, index) => (
    <div key={index} className="p-4 border rounded bg-white">
      <h3 className="font-bold text-xl">{engineer.name}</h3>
      <p className="mt-2">スキル: {engineer.skills}</p>
      <p className="mt-1">経験: {engineer.experience}</p>
      <a href={engineer.link} className="text-blue-500 mt-2 inline-block">
        詳細を見る
      </a>
    </div>
  ));

  return (
    <div className="w-full h-full">
      <CompanyHeader />
      <div className="flex">
        <div className="w-[250px] p-4 bg-gray-200">
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2">フィルターオプション</h2>
            <div className="mb-4">
              <label className="block font-medium mb-1">スキル</label>
              <input
                type="text"
                name="skills"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">経験</label>
              <input
                type="text"
                name="experience"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">勤務地</label>
              <input
                type="text"
                name="location"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="エンジニアを検索..."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="space-y-4">{engineerList}</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyEngineerSearch;
