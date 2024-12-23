import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
      <div className="flex items-center">
        {/* ハンバーガーメニューボタン */}
        <button
            className="w-8 h-8 bg-blue-500 rounded-md flex flex-col items-start justify-center px-2 space-y-1 shadow-lg"
            onClick={toggleMenu}
        >
            {/* 横線のデザイン */}
            <span className="block w-2 h-0.5 bg-white"></span>
            <span className="block w-4 h-0.5 bg-white"></span>
            <span className="block w-1 h-0.5 bg-white"></span>
        </button>
        <h1 className="ml-3 text-2xl font-bold text-blue-500">Rese</h1>
      </div>

      

      {/* ハンバーガーメニュー */}
      {isMenuOpen && <HamburgerMenu onClose={toggleMenu} />}
    </header>
  );
};

export default Header;
