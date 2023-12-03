import { ReactNode } from "react";

export const DayContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg w-full p-4 mb-4">
      <div>{children}</div>
    </div>
  );
};
