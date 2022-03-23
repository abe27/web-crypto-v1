import React, { useState } from "react";
const head = [
  { name: "#", description: "", className: "py-3 px-6 text-left" },
  { name: "หัวข้อ", description: "", className: "py-3 px-6 text-left" },
  { name: "รายละเอียด", description: "", className: "py-3 px-6 text-left" },
  { name: "แก้ไขล่าสุด", description: "", className: "py-3 px-6 text-center" },
  { name: "สถานะ", description: "", className: "py-3 px-6 text-center" },
  { name: "", description: "", className: "py-3 px-6 text-center" },
];

const EnableDisable = ({ iObj, handleClick }) => {
  let el = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      ></path>
    </svg>
  );

  if (iObj.is_active) {
    el = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    );
  }

  return (
    <div
      className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 hover:cursor-pointer"
      onClick={() => handleClick(iObj)}
    >
      {el}
    </div>
  );
};

const TableView = ({
  thead = head,
  tbody = null,
  updateActive = null,
  updateData = null,
  deleteData = null
}) => {
  const reStatus = (i) => {
    let txt = (
      <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
        Disable
      </span>
    );
    if (i) {
      txt = (
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          Active
        </span>
      );
    }

    return txt;
  };

  const reDate = (d) => {
    let x = new Date(d);
    return (
      x.getFullYear() +
      "-" +
      ("0" + (x.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + x.getDate()).slice(-2) +
      " " +
      ("0" + x.getHours()).slice(-2) +
      ":" +
      ("0" + x.getMinutes()).slice(-2)
    );
  };

  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          {thead &&
            thead.map((i) => (
              <th key={i.name} className={i.className}>
                {i.name}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {tbody &&
          tbody.map((i, x) => (
            <tr
              key={i.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{x + 1}</td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <span className="font-medium">{i.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <span>{i.description}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">{reDate(i.updated_at)}</td>
              <td className="py-3 px-6 text-center">{reStatus(i.is_active)}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  {/* <EnableDisable
                    iObj={i}
                    handleClick={() => updateActive(i)}
                  /> */}
                  <div
                    className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 hover:cursor-pointer"
                    onClick={() => updateData(i)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="w-4 mr-2">
                    <a
                      className="transform hover:text-purple-500 hover:scale-110 hover:cursor-pointer"
                      onClick={() => deleteData(i)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableView;
