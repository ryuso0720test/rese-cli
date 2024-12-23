import React from "react";

interface Props {
  onClose: () => void;
}

const HamburgerMenu: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* 閉じるボタン */}
      <button
        className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white text-xl focus:outline-none"
        onClick={onClose}
      >
        ×
      </button>

      {/* メニュー項目 */}
      <nav className="space-y-6 text-blue-500 text-lg font-bold">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/logout" className="hover:underline">
          Logout
        </a>
        <a href="/mypage" className="hover:underline">
          Mypage
        </a>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
