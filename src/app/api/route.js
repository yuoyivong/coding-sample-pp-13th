import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// get all
export const GET = async () => {
  const studentList = await prisma.student.findMany();
  return NextResponse.json({
    status: 200,
    message: "success",
    payload: studentList,
  });
};

// post student
export const POST = async (request) => {
  const { studentName, email } = await request.json();

  const student = await prisma.student.create({
    data: {
      studentName,
      email,
    },
  });

  return NextResponse.json({
    status: 201,
    message: "success",
    payload: student,
  });
};
