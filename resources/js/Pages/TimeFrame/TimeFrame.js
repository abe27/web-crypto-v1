import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Header, MetaHeader, TableView } from "@/Components";
import Swal from "sweetalert2";

const expData = [];

const TimeFrame = (props) => {
  const [timeFrameData, setTimeFrameData] = useState(expData);
  const [addBtn, setAddBtn] = useState(false);
  const [refreshBtn, setRefreshBtn] = useState(false);

  const handleReloadButton = async () => {
    setTimeFrameData(null);
    setRefreshBtn(true);
    let get = await axios.get(route("administrator.time_frame.get"));
    setTimeFrameData(await get.data);
    setRefreshBtn(false);
  };

  const handleUpdateData = async (obj) =>
    (window.location.href = route("administrator.time_frame.show", obj.id));

  const handleDelete = (obj) => {
    Swal.fire({
      title: "คุณต้องการที่จะลบ?",
      text: `${obj.name} ใช่หรือไม่`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ไม่แน่ใจ",
      confirmButtonText: "ใช่ ลบเลย!",
    }).then((result) => {
      if (result.isConfirmed) {
        destroy(route("administrator.time_frame.destroy", obj.id), {
          onSuccess: () => {
            Swal.fire("ดีใจด้วย!", "ลบข้อมูลเรียบร้อยแล้ว", "success").then(
              (r) => handleReloadButton()
            );
          },
        });
      }
    });
  };

  useEffect(() => handleReloadButton(), []);

  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <MetaHeader title={props.title} description={props.description} />

      {/* Page title starts */}
      <Header
        title="จัดการช่วงเวลาในการดึงข้อมูล"
        breadcrumb={props.breadcrumbs}
        addLoading={addBtn}
        routeTo="administrator.time_frame.create"
        refreshLoading={refreshBtn}
        handleReloadButton={handleReloadButton}
      />
      {/* Page title ends */}
      <div className="container mx-auto">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
          <TableView
            tbody={timeFrameData}
            updateData={handleUpdateData}
            deleteData={handleDelete}
          />
          {/* end page */}
        </div>
      </div>
    </Authenticated>
  );
};

export default TimeFrame;
