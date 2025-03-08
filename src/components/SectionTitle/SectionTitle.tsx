import React, { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative text-center">
      <h1 className="text-5xl my-4 underline underline-offset-2">{children}</h1>
    </div>
  );
};

export default SectionTitle;
