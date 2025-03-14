import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productList = [
  {
    product_name: "sprite",
    image:
      "https://i.pinimg.com/736x/59/90/74/599074529388f27730c3ba456ce8afc5.jpg",
    description: "",
    price: 1.2,
    is_like: false,
  },
  {
    product_name: "pepsi",
    image:
      "https://i.pinimg.com/736x/f3/5b/9f/f35b9f7c3770c086ea90591eac138815.jpg",
    description: "Pepsi is good",
    price: 1.5,
    is_like: true,
  },
  {
    product_name: "coca cola",
    image:
      "https://i.pinimg.com/736x/be/fb/2b/befb2b516439e57e9084c9d38b1b62df.jpg",
    description: "Coca is very popular",
    price: 0.75,
    is_like: true,
  },
];

export async function addInitialData() {
  await prisma.product.createMany({ data: productList });
  //   for (const pro of productList) {
  //     await prisma.student.create({ data: s });
  //   }
}

addInitialData();
