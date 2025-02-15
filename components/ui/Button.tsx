import React from "react";

const Button: React.FC<ButtonProps> = ({ children, color, size, className }) => {
  return (
    <div>
      <button className={`${color} ${size} ${className}`}>{children}</button>
    </div>
  );
};

export default Button;
