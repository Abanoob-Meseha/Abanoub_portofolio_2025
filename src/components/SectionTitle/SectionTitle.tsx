import React, { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative text-center my-4">
      <h1 className="text-5xl animate-blink">{children}</h1>
    </div>
  );
};

export default SectionTitle;
