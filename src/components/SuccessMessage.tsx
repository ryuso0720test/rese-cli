import React from "react";
import { Link } from "react-router-dom";

interface Props {
  message: string;
  linkTo: string;
  buttonText: string;
}

const SuccessMessage: React.FC<Props> = ({ message, linkTo, buttonText }) => {
  return (
    <div className="bg-white px-8 py-16 rounded-lg shadow-lg text-center w-96">
      <h2 className="text-xl font-bold mb-12">{message}</h2>
      <Link to={linkTo}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        {buttonText}
      </Link>
    </div>
  );
};

export default SuccessMessage;
