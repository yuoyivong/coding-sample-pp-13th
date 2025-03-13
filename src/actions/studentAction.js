"use server";
import { addNewStudent, updateStudentById } from "@/services/studentService";
import { revalidatePath, revalidateTag } from "next/cache";

export const createNewStudent = async () => {
  const student = await addNewStudent();
  console.log("Student ", student);
  //   revalidateTag("student");
  revalidatePath("/student");

  return student;
};
