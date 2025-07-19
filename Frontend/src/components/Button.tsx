import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className: string;
}

const Button = ({ children, onClick, className}: ButtonProps) => {
  return (
    <div className={className}>
      <button className="cursor-pointer" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
