// LayoutOne.tsx
import type { ReactNode } from "react";
import NavBarThree from "../nav bars/NavBarThree";

const LayoutOne = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBarThree college="Hunter College" />
      {/* Add padding-top equal to NavBar height */}
      <main className="pt-16 md:ml-54 px-4 sm:px-8 md:px-12 lg:px-24 py-6">
        {children}
      </main>
    </div>
  );
};

export default LayoutOne;
