import { createNewStudent } from "@/actions/studentAction";
import { getAllStudents } from "@/services/studentService";
import Link from "next/link";

export default async function page() {
  //   const [students, setStudents] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const allStudents = await getAllStudents();
  //       setStudents(allStudents);
  //     };

  //     fetchData();
  //   }, []);

  const students = await getAllStudents();

  return (
    <div>
      <form action={createNewStudent}>
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium p-4 rounded-lgY"
        >
          Add New Student
        </button>
      </form>
      {students?.map((student) => (
        <div
          key={student?.id}
          className="bg-gray-200 rounded-xl my-8 container mx-auto p-5"
        >
          <Link href={`/student/${student?.id}`}>
            <h1 className="text-2xl text-blue-600 font-medium ">
              {student?.id}. {student?.name}
            </h1>
            <p>{student?.bio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
