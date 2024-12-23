import React from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (username: string, email: string) => {
    console.log("ユーザー登録:", username, email);
    navigate("/thanks");
  };

  return (
    <div className="container">
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
