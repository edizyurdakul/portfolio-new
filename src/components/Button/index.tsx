import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: ButtonProps) => {
  return (
    <a
      className="flex h-12 items-center justify-center space-x-3 rounded-md px-2 py-4 font-bold transition-colors duration-300 ease-in-out border border-neutral-800 bg-black/0 hover:bg-neutral-900"
      aria-label="Resume"
      href={href}
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
