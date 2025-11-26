import React from "react";

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full max-w-md">
      {children}
    </div>
  );
};
