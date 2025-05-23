import {
  Search,
  RefreshCw,
  Calendar,
  ListFilter,
  MoreVertical,
  CirclePlus,
} from "lucide-react";
import Table from "./Table";

export default function AllProducts() {
  return (
    <div className="bg-white px-[30px] py-[20px] rounded-[12px]">
      <div className="flex flex-col sm:flex-row justify-between gap-x-[30px] gap-y-2 sm:gap-y-0">
        {/* Sol taraf: Başlık */}
        <div className="flex sm:items-center sm:justify-center">
          <h1 className="text-[20px] text-[#333333] font-bold">All Products</h1>
        </div>

        {/* Sağ taraf: Search bar ve ikonlar */}
        <div className="flex items-center gap-x-1 sm:gap-x-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white border border-[#ECECEB] rounded-[8px] gap-[2px] p-[10px]">
            <Search size={16} className="text-[#515161]" />
            <input
              type="text"
              placeholder="Search item..."
              className="ml-2 text-[14px] text-[#B2B3B9] font-normal outline-none bg-transparent hidden sm:block"
            />
          </div>

          {/* İkonlar */}
          <div className="flex items-center gap-x-2">
            {[RefreshCw, Calendar, ListFilter].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="sm:flex items-center justify-center w-10 h-10 border border-[#ECECEB] rounded-md hidden"
                >
                  <Icon size={18} className="text-[#333333]" />
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-x-2">
            <div className="flex items-center justify-center w-10 h-10 border border-[#ECECEB] rounded-md">
              <MoreVertical size={18} className="text-[#333333]" />
            </div>
          </div>

          {/* Buton */}
          <button className="flex items-center bg-[#4F56D3] text-white text-[14px] font-semibold rounded-md w-full min-h-[42px] py-[10px] px-[20px]">
            <CirclePlus size={18} className="text-[#CDFF65] mr-2" />
            Add New Product
          </button>
        </div>
      </div>

      <div className="mt-[40px]">
        <Table />
      </div>
    </div>
  );
}
