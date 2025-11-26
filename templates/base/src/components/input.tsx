import React from "react";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="w-full px-3 py-2 border rounded-md bg-white text-sm focus:ring-2 focus:ring-sky-300"
    {...props}
  />
);
