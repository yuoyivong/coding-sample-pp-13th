// get all students
export const getAllStudents = async () => {
  const students = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/students`
  );

  const response = await students.json();
  return response;
};

// get student by id
export const getStudentById = async (id) => {
  const student = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/students/${id}`
  );
  const response = await student.json();
  return response;
};

// add new student
export const addNewStudent = async () => {
  const student = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/students`,
    {
      method: "POST",
    }
  );
  const response = await student.json();
  return response;
};
