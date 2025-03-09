import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// get by id
export const GET = async (_, { params }) => {
  const { id } = params;

  const student = await prisma.student.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: student,
  });
};

// delete by id
export const DELETE = async (_, { params }) => {
  const { id } = params;
  const findStu = await prisma.student.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (findStu) {
    await prisma.student.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({
      status: 200,
      message: "delete successfully",
    });
  } else {
    return NextResponse.json({
      status: 404,
      message: "Not found student",
    });
  }
};

// update student by id
export const PUT = async (request, { params }) => {
  const { studentName, email } = await request.json();
  const { id } = params;

  const student = await prisma.student.update({
    where: {
      id: parseInt(id),
    },
    data: {
      studentName,
      email,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "success",
    payload: student,
  });
};
