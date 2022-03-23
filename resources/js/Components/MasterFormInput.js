import { useForm } from "@inertiajs/inertia-react";
const MasterFormInput = ({ formData, reset }) => {
  const { data, setData } = useForm({
    name: "",
    description: "",
    is_active: false,
  });
  const onHandleChange = (event) => {
    // event.preventDefault();
    console.dir(event.target.name);
    console.dir(event.target.value);
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );

    formData(event.target);
  };
  return (
    <div className="">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          หัวข้อ
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="ระบุหัวข้อ"
          required=""
          value={data.name}
          onChange={onHandleChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          รายละเอียด
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          value={data.description}
          onChange={onHandleChange}
        ></textarea>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="is_active"
            name="is_active"
            aria-describedby="is_active"
            type="checkbox"
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            value={data.is_active}
            onChange={onHandleChange}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="is_active"
            className="font-medium text-gray-900 dark:text-gray-300"
          >
            สถานะการใช้งาน
          </label>
        </div>
      </div>
    </div>
  );
};

export default MasterFormInput;
