import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { HeaderControl, MasterFormInput, MetaHeader } from "@/Components";
import { useForm } from "@inertiajs/inertia-react";

const AddPeriodHour = (props) => {
  const { data, setData, post, processing, errors, reset} = useForm({
    name: "",
    description: "",
    is_active: false,
  });
  const [cancelBtn, setCancelBtn] = useState(false);
  const [saveBtn, setSaveBtn] = useState(false);

  const handleSaveButton = () => {
    setSaveBtn(true);
    console.dir(data);
    setTimeout(() => setSaveBtn(false), 3500);
  };

  const handleCancelButton = () => {
    setCancelBtn(true);
    setTimeout(() => setCancelBtn(false), 3500);
  };

  const inputData = (event) => {
    setData(
      event.name,
      event.type === "checkbox"
        ? event.checked
        : event.value
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
      />
      {/* Page title ends */}
      <div className="container mx-auto px-6">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
          <MasterFormInput formData={inputData} reset={reset} />
        </div>
      </div>
    </Authenticated>
  );
};

export default AddPeriodHour;
