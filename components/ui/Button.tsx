import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <div>
      <button className={`${color} ${size} ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
