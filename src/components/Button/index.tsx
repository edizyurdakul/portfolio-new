import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}

const Button = ({ children, href, external = false }: ButtonProps) => {
  if (external) {
    return (
      <a
        className="flex h-12 items-center justify-center space-x-3 rounded-md px-2 py-4 font-bold transition-colors duration-300 ease-in-out border border-neutral-800 bg-black/0 hover:bg-neutral-900"
        href={href}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a className="flex h-12 items-center justify-center space-x-3 rounded-md px-2 py-4 font-bold transition-colors duration-300 ease-in-out border border-neutral-800 bg-black/0 hover:bg-neutral-900">
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default Button;
