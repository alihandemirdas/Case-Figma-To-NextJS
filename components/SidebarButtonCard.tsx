"use client";

import { useState } from "react";
import {
  Home,
  Settings,
  ChevronDown,
  ChevronRight,
  User,
  Folder,
  BadgeCheck,
  CirclePlus,
  Inbox,
  Package,
  Tags,
  Box,
  Boxes,
  ScanBarcode,
  FileUp,
  LucideIcon,
  ChevronUp,
} from "lucide-react";

interface ButtonItem {
  name: string;
  icon: string;
  children?: ButtonItem[];
}

const iconComponents: Record<string, LucideIcon> = {
  Home,
  Settings,
  User,
  Folder,
  BadgeCheck,
  CirclePlus,
  Inbox,
  Package,
  Tags,
  Box,
  Boxes,
  ScanBarcode,
  FileUp,
};

export default function SidebarButtonCard({ item }: { item: ButtonItem }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = item.children && item.children.length > 0;

  const Icon = iconComponents[item.icon] || Box;

  return (
    <div>
      <button
        onClick={() => hasDropdown && setOpen(!open)}
        className={`flex items-center justify-between w-full text-[17px] font-medium px-3 py-2 mb-1 rounded-[6px] transition-all
  ${open ? "text-white bg-[#4F56D3]" : "text-[#878787] hover:text-[#4F56D3]"}`}
      >
        <div className="flex items-center gap-2">
          <Icon
            size={18}
            className={`${
              open
                ? "text-[#CDFF65]"
                : "text-[#878787] group-hover:text-[#4F56D3]"
            }`}
          />
          {item.name}
        </div>
        {item.name === "Brands" && (
          <div className="bg-[#CDFF65] text-[#161919] text-[12px] font-bold h-[24px] min-w-[28px] rounded-full flex items-center justify-center leading-none">
            49
          </div>
        )}
        {hasDropdown &&
          (open ? (
            <ChevronUp size={16} className="text-white" />
          ) : (
            <ChevronDown size={16} className="text-[#878787]" />
          ))}
      </button>

      {hasDropdown && open && (
        <div className="bg-[#F5F5F5] rounded-[6px] mt-[-4px] px-3 py-2 space-y-2">
          {item.children!.map((child, i) => {
            const ChildIcon = iconComponents[child.icon];
            return (
              <button
                key={i}
                className="group flex items-center gap-2 text-[17px] text-[#878787] w-full py-2 mb-1 rounded hover:text-[#4F56D3]"
              >
                <ChildIcon
                  size={18}
                  className="text-[#878787] group-hover:text-[#4F56D3]"
                />
                {child.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
