import { getStudentById } from "@/services/studentService";
import React from "react";

export default async function StudentDetails({ params }) {
  const { id } = await params;
  const student = await getStudentById(id);

  return (
    <div>
      <div className="bg-gray-200 rounded-xl my-8 container mx-auto p-5">
        <h1 className="text-2xl text-blue-600 font-medium ">
          {student?.id}. {student?.name}
        </h1>
        <p>{student?.bio}</p>
      </div>
    </div>
  );
}
