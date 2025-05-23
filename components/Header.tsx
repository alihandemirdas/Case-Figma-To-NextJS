import { useState } from "react";
import {
  Bell,
  ChevronDown,
  Globe,
  Mail,
  Moon,
  SlidersVertical,
  Sun,
} from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="py-[20px] bg-white flex items-center justify-between px-4 rounded-[10px]">
      <div className="flex flex-col items-start justify-center">
        <p className="ml-4 text-[24px] font-bold">Products</p>
        <p className="ml-4 text-[16px] text-[#878787] font-normal">
          Manage your products
        </p>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-x-2">
        <div className="mr-3">
          <label className="inline-flex items-center cursor-pointer space-x-3 relative">
            {/* Sol ikon - Güneş */}
            <Sun
              size={18}
              className={!darkMode ? "text-[#4F56D3]" : "text-[#878787]"}
            />

            {/* Toggle */}
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div className="w-12 h-6 bg-[#ECECEB] rounded-full relative transition-colors duration-300">
              <div
                style={{
                  left: darkMode ? "24px" : "4px",
                }}
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#4F56D3] border border-white rounded-full transition-all duration-300"
              />
            </div>

            {/* Sağ ikon - Ay */}
            <Moon
              size={18}
              className={darkMode ? "text-[#4F56D3]" : "text-[#878787]"}
            />
          </label>
        </div>

        <div className="h-10 border-l border-gray-300 mr-3"></div>

        <div className="flex items-center justify-center gap-x-[30px] mr-3">
          <Globe
            size={23}
            className={!darkMode ? "text-[#878787]" : "text-[#878787]"}
          />
          <div className="relative">
            <Bell
              size={23}
              className={!darkMode ? "text-[#878787]" : "text-[#878787]"}
            />
            <span className="absolute -top-1 -right-1 bg-[#CDFF65] text-[#161919] text-[10px] font-semibold h-[16px] min-w-[16px] px-[4px] rounded-full flex items-center justify-center leading-none">
              12
            </span>
          </div>
          <Mail
            size={23}
            className={!darkMode ? "text-[#878787]" : "text-[#878787]"}
          />
          <SlidersVertical
            size={23}
            className={!darkMode ? "text-[#878787]" : "text-[#878787]"}
          />
        </div>

        <div className="flex justify-center items-center gap-x-2 mr-2">
          <img className="w-10 h-10 rounded-full bg-[#C4C4C4]" />
          <div className="flex justify-between items-center gap-x-4">
            <div className="flex flex-col justify-center">
              <p className="text-[16px] text-[#202020] font-bold">
                Patricia Peter
              </p>
              <p className="text-[14px] text-[#8F8F8F] font-normal">
                Super Admin
              </p>
            </div>
            <div>
              <ChevronDown size={16} className="text-[#878787]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
