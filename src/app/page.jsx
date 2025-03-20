import BookComponent from "@/components/BookComponent";
import CounterComponent from "@/components/CounterComponent";
import { getAllBooks } from "@/services/bookService";
import { getAllStudents } from "@/services/studentService";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const studentList = await getAllStudents();
  return (
    <div className="grid grid-cols-2">
      <div>
        <Suspense fallback={<p>Loading book ....</p>}>
          <BookComponent />
        </Suspense>
      </div>

      <CounterComponent />

      {/* <div>
        <h1 className="text-3xl text-pink-600">Student</h1>{" "}
        {studentList?.map((student) => (
          <p key={student?.id}>{student?.name}</p>
        ))}
      </div> */}
    </div>
  );
}
