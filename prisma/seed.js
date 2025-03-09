const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const studentData = [
  {
    studentName: "Many",
    email: "many@gmail.com",
  },
  {
    studentName: "Makara",
    email: "makara@gmail.com",
  },
  {
    studentName: "Somphors",
    email: "somphors@gmail.com",
  },
];

export const createStudent = async () => {
  for (let s of studentData) {
    await prisma.student.create({
      data: s,
    });
  }
};

createStudent()
