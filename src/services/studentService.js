// get all student
export const getAllStudents = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/students`);
  const students = await response.json();
  return students;
};
