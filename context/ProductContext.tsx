"use client";

import React, { createContext, useContext, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";

interface Product {
  id: string;
  title: string;
  description: string;
  transactionId: string;
  date: string;
  amount: string;
  status: string;
}

interface ProductContextType {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  loadProducts: (page: number) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const loadProducts = async (page: number) => {
    try {
      const data = await fetchProducts(page);
      setProducts(data.products);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
      setTotalItems(data.totalItems);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, currentPage, totalPages, totalItems, loadProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
