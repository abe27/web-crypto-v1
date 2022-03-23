const breadcrumbs = [
  {
    id: 1,
    name: "หน้าแรก",
    icon: false,
    current: false,
    href: "welcome",
  },
  {
    id: 2,
    name: "รูปแบบ",
    icon: true,
    current: false,
    href: "welcome",
  },
  {
    id: 3,
    name: "สร้างเอกสารใหม่",
    icon: true,
    current: true,
    href: "welcome",
  },
];

const loopBreadcrumb = (i) => {
  if (i.icon) {
    return (
      <li key={i.id} aria-current="page">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-1 text-sm font-medium md:ml-2 dark:text-gray-500">
            {!i.current && (
              <a
                href={route(i.href)}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {i.name}
              </a>
            )}
            {i.current && (
              <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">
                {i.name}
              </span>
            )}
          </span>
        </div>
      </li>
    );
  }

  return (
    <li key={i.id} className="inline-flex items-center">
      <a
        href={route(i.href)}
        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        {i.name}
      </a>
    </li>
  );
};

const HeaderControl = ({
  title = "Header",
  breadcrumb = breadcrumbs,
  cancelLoading = false,
  handleCancelButton = false,
  saveLoading = false,
  handleSaveButton = false,
  processing=false,
}) => {
  return (
    <div className="my-6 lg:my-12 container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between border-b border-gray-300">
      <div>
        <h4 className="text-sm font-bold leading-tight text-gray-800">
          {title}
        </h4>
        <nav>
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumb && breadcrumb.map((i) => loopBreadcrumb(i))}
          </ol>
        </nav>
      </div>
      <div className="mt-6 lg:mt-0">
        <button
          className="mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-100 rounded text-indigo-700 px-6 py-2 text-sm"
          onClick={handleCancelButton}
        >
          {cancelLoading && (
            <svg
              role="status"
              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
          )}
          {!cancelLoading && (<i className="fa-solid fa-xmark mr-2"></i>)}
          ยกเลิก
        </button>
        <button
          processing={processing}
          className="transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none border bg-indigo-700 rounded text-white px-8 py-2 text-sm"
          onClick={handleSaveButton}
        >
          {saveLoading && (
            <svg
              role="status"
              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
          )}
          {!saveLoading && <i className="fa-solid fa-floppy-disk mr-2"></i>}
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  );
};

export default HeaderControl;
