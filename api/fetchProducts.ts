export const fetchProducts = async (page: number) => {
  try {
    const response = await fetch(`https://devcase.isiksoftyazilim.com/api/products?page=${page}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data = await response.json();

    // Veriyi dönüştür
    const transformedData = {
      products: data.data.map((item: any) => ({
        id: item.id.toString(),
        title: item.name,
        description: item.category,
        transactionId: item.barcode,
        date: item.productCode,
        amount: `$${item.price.toFixed(2)}`,
        status: ["Completed", "Canceled", "Pending"][Math.floor(Math.random() * 3)], // Rastgele status
      })),
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      totalItems: data.totalItems,
    };

    return transformedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};