import React from "react";

type Props = {};

export default function file_input({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
    </div>
  );
}
