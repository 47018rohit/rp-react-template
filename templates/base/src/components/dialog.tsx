import React from "react";

export const Dialog: React.FC<React.PropsWithChildren<{ open?: boolean }>> = ({
  children,
  open,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-lg p-6 z-10 shadow-lg">
        {children}
      </div>
    </div>
  );
};
