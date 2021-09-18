/* eslint-disable no-use-before-define */
import React from "react";
import "./Button.css";

const Button = ({ label }: { label: string }) => {
  return (
    <div className="button bg-[#3359DF] flex items-center justify-center mt-[3.5rem] text-white font-bold text-base">
      <button>{label}</button>
    </div>
  );
};

export default Button;
