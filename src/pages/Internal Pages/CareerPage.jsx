import React from "react";
import Navbar from "../../components/Navbar";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[120px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#f0f6ff] to-[#e9f3ff] text-center p-10">
        <h1 className="text-5xl font-bold text-[#2352A5] mb-6">Careers</h1>
        <p className="max-w-2xl text-gray-700 text-lg">
          This is the <strong>Career</strong> internal page.  
        </p>
      </div>
    </>
  );
}
