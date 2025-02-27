import React, { useState } from "react";
import TableComponent from "./TableComponent";

export default function InputComponent() {
  const [stu, setStu] = useState({});
  const [students, setStudents] = useState([]);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStu((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, { id: students?.length + 4, ...stu }]);
  };

  return (
    <div className="container mx-auto my-6 space-y-6">
      {/* header */}
      <h1 className="text-3xl font-semibold text-center">React Project Demo</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="studentName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Student Name
            </label>
            <input
              type="text"
              name="studentName"
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              name="age"
              className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="24"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {/* table component */}
      <TableComponent students={students} />
    </div>
  );
}
