import React, { useEffect, useState } from "react";
import { studentList } from "../data/studentList";

export default function TableComponent({ students }) {
  const [stuList, setStuList] = useState([]);

  const mergeStudents = () => {
    setStuList([...studentList, ...students]);
  };

  useEffect(() => {
    mergeStudents();
  }, [students]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {stuList?.map((student) => (
            <tr
              key={student?.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-4">{student?.id}</td>
              <td className="px-6 py-4">{student?.studentName}</td>
              <td className="px-6 py-4">{student?.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
