"use client";
import { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { mockProducts } from "../mock/products";
import {
  BadgeCheck,
  CircleSlash,
  Hourglass,
  CircleEllipsis,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function Table() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [truemu, setTrueMu] = useState<boolean>(false);
  const { products, currentPage, totalPages, totalItems, loadProducts } =
    useProductContext();

  useEffect(() => {
    loadProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      loadProducts(page);
    }
  };

  const isSelected = (id: string) => selectedRows.includes(id);

  const toggleRowSelection = (id: string) => {
    if (isSelected(id)) {
      // Eğer zaten seçiliyse, seçimi kaldır
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      // Eğer seçili değilse, seçime ekle
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="">
      <div className="w-full h-full bg-white rounded-lg">
        {/* Tablo Başlıkları */}
        <div className="flex items-center border-b border-gray-200 pb-[20px]">
          {/* Checkbox */}
          <div className="w-10 flex justify-center relative z-10">
            <input
              type="checkbox"
              checked={selectedRows.length === products.length}
              onChange={() => {
                if (selectedRows.length === products.length) {
                  setSelectedRows([]);
                } else {
                  setSelectedRows(products.map((product) => product.id));
                }
              }}
              className="w-[22px] h-[22px] appearance-none border border-[#B2B3B9] rounded-[4px] checked:bg-[#4F56D3] checked:border-[#4F56D3] flex items-center justify-center"
            />
            {/* Check Icon */}
            {selectedRows.length === products.length && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-3 h-5 text-white z-1"
                viewBox="0 0 22 22"
                fill="currentColor"
              >
                <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
              </svg>
            )}
          </div>
          <div className="w-10"></div>
          <div className="flex-1 min-w-0 text-[16px] font-bold text-[#B2B3B9]">
            Product
          </div>
          <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] font-bold text-[#B2B3B9]">
            Transaction ID
          </div>
          <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] font-bold text-[#B2B3B9]">
            Date
          </div>
          <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] font-bold text-[#B2B3B9]">
            Amount
          </div>
          <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] font-bold text-[#B2B3B9]">
            Status
          </div>
          <div className="w-10"></div>
        </div>

        {/* Tablo Satırları */}
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex border-t-[#ECECEB] border-b-[#ECECEB] border-r-0 border-l-0 border-[1px] items-center py-5 ${
              isSelected(product.id) ? "border-l-4 border-[#4F56D3]" : ""
            }`}
          >
            <div className="w-10 flex justify-center relative">
              <input
                type="checkbox"
                checked={isSelected(product.id)}
                onChange={() => toggleRowSelection(product.id)}
                className="w-[22px] h-[22px] appearance-none border border-[#B2B3B9] rounded-[4px] checked:bg-[#4F56D3] checked:border-[#4F56D3] flex items-center justify-center"
              />
              {/* Check Icon */}
              {isSelected(product.id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-3 h-5 text-white"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
                </svg>
              )}
            </div>

            {/* Icon alanı (boş) */}
            <div className="w-10"></div>

            {/* Product */}
            <div className="flex-1 min-w-0 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ECECEB] rounded-md border border-gray-300 shrink-0"></div>
              <div className="truncate">
                <p className="text-[16px] font-bold text-[#161919] truncate">
                  {product.title}
                </p>
                <p className="text-[14px] font-normal text-[#B2B3B9] truncate">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Transaction ID */}
            <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] text-[#161919] font-normal truncate">
              {product.transactionId}
            </div>

            {/* Date */}
            <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] text-[#B2B3B9] font-normal truncate">
              {product.date}
            </div>

            {/* Amount */}
            <div className="hidden sm:flex sm:flex-1 min-w-0 text-[16px] text-[#161919] font-bold truncate">
              {product.amount}
            </div>

            {/* Status */}
            <div className="hidden sm:flex sm:flex-1 min-w-0">
              <div
                className={`flex items-center justify-center gap-2 p-1 rounded-md w-full max-w-[140px]
            ${
              product.status === "Completed"
                ? "bg-[#89D2331A]"
                : product.status === "Canceled"
                ? "bg-[#F272771A]"
                : "bg-[#5151611A]"
            }`}
              >
                {product.status === "Completed" && (
                  <BadgeCheck size={16} className="text-[#89D233]" />
                )}
                {product.status === "Canceled" && (
                  <CircleSlash size={16} className="text-[#F27277]" />
                )}
                {product.status === "Pending" && (
                  <Hourglass size={16} className="text-[#515161]" />
                )}
                <p
                  className={`text-[14px] font-semibold truncate ${
                    product.status === "Completed"
                      ? "text-[#89D233]"
                      : product.status === "Canceled"
                      ? "text-[#F27277]"
                      : "text-[#515161]"
                  }`}
                >
                  {product.status}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="w-10 hidden sm:flex justify-center">
              <CircleEllipsis size={26} className="text-[#B2B3B9]" />
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-center mt-4 gap-y-2 sm:gap-y-0">
        {/* Sol Taraf: Toplam Bilgi */}
        <p className="text-[18px] text-[#969B9F]">
          Showing{" "}
          <span className="text-[#333333]">{(currentPage - 1) * 12 + 1}</span>-
          <span className="text-[#333333]">
            {Math.min(currentPage * 12, totalItems)}
          </span>{" "}
          from <span className="text-[#333333]">{totalItems}</span> data
        </p>

        {/* Sağ Taraf: Sayfa Numaraları */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-2 border border-[#B2B3B9] rounded-md"
          >
            <ChevronLeft size={16} className="text-[#B2B3B9]" />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-[30px] h-[30px] flex items-center justify-center border border-[#B2B3B9] rounded-[4px] text-[14px] ${
                currentPage === index + 1
                  ? "bg-[#4F56D3] text-white shadow-md"
                  : "text-[#B2B3B9]"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-2 border border-[#B2B3B9] rounded-md"
          >
            <ChevronRight size={16} className="text-[#B2B3B9]" />
          </button>
        </div>
      </div>
    </div>
  );
}
