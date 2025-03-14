import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// get all products
export const GET = async () => {
  const productList = await prisma.product.findMany();

  return NextResponse.json({
    status: 200,
    message: "Get all products successfully.",
    payload: productList,
  });
};

// update like status
export const PUT = async (request) => {
  const { product_id, is_like } = await request.json();

  const product = await prisma.product.update({
    where: {
      product_id: product_id,
    },
    data: {
      is_like: is_like,
    },
  });
  return NextResponse.json({
    status: 200,
    message: `Update product with id ${product_id} successfully.`,
    payload: product,
  });
};
