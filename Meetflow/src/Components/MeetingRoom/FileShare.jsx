import React, { useState } from "react";
import { FiUpload, FiFileText, FiDownload } from "react-icons/fi";

const FileShare = () => {
  const [files, setFiles] = useState([]);

  const uploadFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFiles((prev) => [...prev, file]);
  };

  return (
    <div className="h-full flex flex-col">

      <label className="border-2 border-dashed border-blue-500 rounded-xl p-8 text-center cursor-pointer hover:bg-slate-800 transition">

        <FiUpload
          className="mx-auto text-blue-400"
          size={40}
        />

        <h3 className="text-white text-lg mt-4">
          Upload File
        </h3>

        <p className="text-gray-400 mt-2">
          Click to choose a file
        </p>

        <input
          type="file"
          hidden
          onChange={uploadFile}
        />
      </label>

      <div className="flex-1 mt-6 overflow-y-auto">

        {files.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No files shared yet
          </p>
        ) : (
          files.map((file, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-4 flex justify-between items-center mb-3"
            >
              <div className="flex items-center gap-3">

                <FiFileText
                  className="text-blue-400"
                  size={24}
                />

                <div>
                  <h4 className="text-white">
                    {file.name}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>

              </div>

              <a
                href={URL.createObjectURL(file)}
                download={file.name}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg"
              >
                <FiDownload color="white" />
              </a>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default FileShare;