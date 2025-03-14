"use server";
import { updateCardStatus } from "@/services/productService";
import { revalidateTag } from "next/cache";

export const updateStatus = async (id, status) => {
  const product = await updateCardStatus(id, status);
  console.log("Product : ", product);
  revalidateTag("product");
  return product;
};
