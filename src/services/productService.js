// get all products
export const getAllProducts = async () => {
  const allProducts = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product`,
    {
      next: { tags: ["product"] },
    }
  );

  const response = await allProducts.json();
  return response;
};

// get product by id
export const getProductById = async (id) => {
  const product = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`
  );
  const response = await product.json();
  return response;
};

export const updateCardStatus = async (id, status) => {
  const obj = {
    product_id: id,
    is_like: status,
  };
  const updatedProductStatus = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product`,
    { method: "PUT", body: JSON.stringify(obj) }
  );

  const response = await updatedProductStatus.json();
  return response;
};
