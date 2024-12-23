import React from "react";
import SuccessMessage from "../components/SuccessMessage";

const ThanksPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SuccessMessage
        message="会員登録ありがとうございました！"
        linkTo="/login"
        buttonText="ログインする"
      />
    </div>
  );
};

export default ThanksPage;
