import { cn } from "@/lib/utils";
import { LucideIcon, Plus, Search } from "lucide-react";
import SidebarButtonCard from "./SidebarButtonCard";

const buttons: {
  name: string;
  icon: string;
  children?: { name: string; icon: string }[];
}[] = [
  { name: "Dashboard", icon: "Home" },
  {
    name: "Products",
    icon: "Inbox",
    children: [
      { name: "All Products", icon: "Package" },
      { name: "Add New Product", icon: "CirclePlus" },
      { name: "Tags", icon: "Tags" },
    ],
  },
  { name: "Categories", icon: "Box" },
  { name: "Sub Category", icon: "Boxes" },
  { name: "Brands", icon: "BadgeCheck" },
  { name: "Scan Barcode", icon: "ScanBarcode" },
  { name: "Import Products", icon: "FileUp" },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      {/* mobilde üst bar */}
      <div
        className={cn(
          "flex sm:hidden w-full fixed bg-white top-0 left-0 items-center justify-between px-4 h-[70px] border-b border-[#ECECEB]"
        )}
      >
        <div className="font-bold text-xl text-black">
          <img src="/assets/Logo.svg" alt="LOGO" className="w-2/3" />
        </div>
        <button
          onClick={toggleSidebar}
          className="text-black hover:text-gray-500 focus:outline-none text-3xl"
        >
          ☰
        </button>
      </div>

      <aside
        className={cn(
          "bg-white text-white transition-all duration-300 ease-in-out min-h-screen",
          isOpen ? "w-[345px]" : "hidden w-0"
        )}
      >
        <div className="block sm:flex-1">
          <div className="hidden sm:block border-b-[1px] border-[#ECECEB]">
            <div className="p-6 flex flex-row justify-between items-center">
              <div className="font-bold text-2xl text-black">
                <img src="/assets/Logo.svg" alt="LOGO" className="w-2/3" />
              </div>
              <button
                onClick={toggleSidebar}
                className="text-black hover:text-gray-500 focus:outline-none text-3xl"
              >
                ☰
              </button>
            </div>
          </div>

          <div className="pt-16 sm:pt-0">
            <div className="p-6">
              <div className="flex justify-start items-center border-[1px] border-[#ECECEB] rounded-[10px] px-3 py-2 w-full">
                <Search color="#878787" className="mr-2 w-[20px]" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-1 outline-none text-[12px] bg-transparent text-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="px-6">
            <p className="text-[16px] text-[#C7C7C7] font-bold mb-2 tracking-custom">
              MAIN MENU
            </p>
            {buttons.map((item, i) => (
              <SidebarButtonCard key={i} item={item} />
            ))}
          </div>
        </div>
      </aside>

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed bottom-4 right-4 w-12 h-12 bg-[#4F56D3] text-white rounded-full shadow-lg flex items-center justify-center z-50"
        >
          <Plus size={24} />
        </button>
      )}
    </>
  );
}
