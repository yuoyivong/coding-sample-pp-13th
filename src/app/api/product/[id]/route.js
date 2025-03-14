import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// get product by id
export const GET = async (_, { params }) => {
  const { id } = params;

  const product = await prisma.product.findUnique({
    where: {
      product_id: parseInt(id),
    },
  });

  return NextResponse.json({
    status: 200,
    message: `Get product with id ${id} successfully.`,
    payload: product,
  });
};
