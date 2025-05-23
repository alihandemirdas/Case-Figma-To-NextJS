"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CardHeader from "@/components/CardHeader";
import AllProducts from "@/components/AllProducts";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-full w-screen min-h-screen bg-[#f6f6f6]">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`w-screen sm:flex flex-col pt-16 sm:pt-0 ${
          isSidebarOpen ? "hidden sm:visible" : ""
        }`}
      >
        <div className="flex flex-col px-[30px] py-[30px]">
          <div>
            <Header />
          </div>
        </div>
        <div className="flex flex-col px-[30px]">
          <div className="flex-1 bg-gray-100">
            <CardHeader />
          </div>
        </div>
        <div className="flex flex-col px-[30px] mt-[30px] gap-y-[30px] mb-[80px]">
          <AllProducts />
        </div>
      </div>
    </div>
  );
}
