import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; // アイコンを追加

interface Props {
  onLogin: () => void;
}

const LoginForm: React.FC<Props> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにログインロジックを実装
    console.log("ログイン成功");
    onLogin();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 pb-6">
        <h2 className="text-xl font-bold text-white bg-blue-500 text-left py-3 rounded-md mb-6 pl-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="px-6">
          <div className="mb-4 flex items-center border-b border-gray-300">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-2 py-2 focus:outline-none"
            />
          </div>
          <div className="mb-6 flex items-center border-b border-gray-300">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-2 py-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-1/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none float-right"
          >
            ログイン
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
