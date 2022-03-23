import { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { HeaderControl, MetaHeader, TableView } from "@/Components";
import { useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";

const UpdateTimeFrame = (props) => {
  const { data, setData, put, processing, errors, reset } = useForm({
    name: props.data.name,
    description: props.data.description,
    is_active: props.data.is_active,
  });

  const [cancelBtn, setCancelBtn] = useState(false);
  const [saveBtn, setSaveBtn] = useState(false);

  console.dir(props);
  const handleCancelButton = () => {
    setCancelBtn(true);
    setTimeout(() => setCancelBtn(false), 3500);
  };

  const handleSaveButton = (e) => {
    e.preventDefault();
    setSaveBtn(true);
    put(route(props.href, props.data.id), {
      onError: (e) => {
        Swal.fire(
          "เกิดข้อผิดพลาด!",
          "กรุณาตรวจสอบข้อมูลอีกครั้งด้วย",
          "error"
        ).then((r) => setSaveBtn(false));
      },
      onSuccess: () => {
        Swal.fire("ดีใจด้วย!", "บันทึกข้อมูลเรียบร้อยแล้ว", "success").then(
          (r) => setSaveBtn(false)
        );
      },
    });
    // setData({
    //   name: '', description: '', is_active: false
    // })
  };

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <MetaHeader title={props.title} description={props.description} />

      {/* Page title starts */}
      <HeaderControl
        title="จัดการช่วงเวลาในการดึงข้อมูล"
        breadcrumb={props.breadcrumbs}
        cancelLoading={cancelBtn}
        handleCancelButton={handleCancelButton}
        saveLoading={saveBtn}
        handleSaveButton={handleSaveButton}
        processing={processing}
      />
      {/* Page title ends */}
      <div className="container mx-auto">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}

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
                  checked={data.is_active}
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

          {/* end page */}
        </div>
      </div>
    </Authenticated>
  );
};

export default UpdateTimeFrame;
