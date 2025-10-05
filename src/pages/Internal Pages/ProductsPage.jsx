import React from "react";
import Navbar from "../../components/Navbar";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[120px] min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#f2f9ff] to-[#e7f4ff] text-center p-10">
        <h1 className="text-5xl font-bold text-[#2352A5] mb-6">Our Products</h1>
        <p className="max-w-2xl text-gray-700 text-lg">
          This is the <strong>Products</strong> internal page.  
        </p>
      </div>
    </>
  );
}
