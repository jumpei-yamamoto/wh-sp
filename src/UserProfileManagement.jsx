"use client";
import React from "react";
import UserHeader from "./UserHeader";

function UserProfileManagement() {
  const [editMode, setEditMode] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "山田 太郎",
    email: "yamada.taro@example.com",
    phone: "090-1234-5678",
    location: "東京都",
    skills: "JavaScript, React, Node.js, CSS, HTML",
    workExperience: "XYZ株式会社でソフトウェア開発者（2020年〜現在）",
    education: "ABC大学でコンピュータサイエンスの学士号（2016年〜2020年）",
    portfolio: ["プロジェクト1", "プロジェクト2"],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full">
      <UserHeader />
      <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md">
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] border-[2px] border-[#ccc] rounded-full my-5 cursor-pointer overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="User's profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="mb-6">
              <div className="py-2 border-b border-[#eee] text-[18px] text-[#333] font-roboto">
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  `名前: ${userData.name}`
                )}
              </div>
              <div className="py-2 border-b border-[#eee] text-[18px] text-[#333] font-roboto">
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  `メール: ${userData.email}`
                )}
              </div>
              <div className="py-2 border-b border-[#eee] text-[18px] text-[#333] font-roboto">
                {editMode ? (
                  <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  `電話番号: ${userData.phone}`
                )}
              </div>
              <div className="py-2 border-b border-[#eee] text-[18px] text-[#333] font-roboto">
                {editMode ? (
                  <input
                    type="text"
                    name="location"
                    value={userData.location}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  `住所: ${userData.location}`
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="font-bold mb-3 text-[16px] font-roboto">
                スキルセット:
              </div>
              <div className="text-[16px] text-[#555] font-roboto mb-3">
                {editMode ? (
                  <input
                    type="text"
                    name="skills"
                    value={userData.skills}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  userData.skills
                )}
              </div>

              <div className="font-bold mb-3 text-[16px] font-roboto">
                職務経験:
              </div>
              <div className="text-[16px] text-[#555] font-roboto mb-3">
                {editMode ? (
                  <input
                    type="text"
                    name="workExperience"
                    value={userData.workExperience}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  userData.workExperience
                )}
              </div>

              <div className="font-bold mb-3 text-[16px] font-roboto">
                学歴:
              </div>
              <div className="text-[16px] text-[#555] font-roboto mb-3">
                {editMode ? (
                  <input
                    type="text"
                    name="education"
                    value={userData.education}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                ) : (
                  userData.education
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="font-bold mb-3 text-[16px] font-roboto">
                ポートフォリオ:
              </div>
              {userData.portfolio.map((project, index) => (
                <div
                  key={index}
                  className="text-[16px] text-[#007bff] mb-3 font-roboto underline cursor-pointer"
                >
                  {project}
                </div>
              ))}
              {editMode && (
                <button className="text-[16px] font-roboto text-white bg-[#007bff] py-2 px-4 rounded">
                  ドキュメントをアップロード
                </button>
              )}
            </div>

            <button
              className="text-[14px] font-roboto text-white bg-[#28a745] py-2 px-4 rounded font-bold"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "プロファイルを保存" : "プロファイルを編集"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileManagement;
