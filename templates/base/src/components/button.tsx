import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  children,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none",
        variant === "default" && "bg-sky-600 text-white hover:bg-sky-700",
        variant === "ghost" &&
          "bg-transparent text-slate-700 hover:bg-slate-100",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
