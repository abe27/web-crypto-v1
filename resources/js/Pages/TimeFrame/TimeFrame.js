import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Header, MetaHeader, TableView } from "@/Components";

const expData = [];

const TimeFrame = (props) => {
  const [timeFrameData, setTimeFrameData] = useState(expData);
  const [addBtn, setAddBtn] = useState(false);
  const [refreshBtn, setRefreshBtn] = useState(false);

  const handleReloadButton = async () => {
    setTimeFrameData(null)
    setRefreshBtn(true);
    let get = await axios.get(route("administrator.time_frame.get"));
    setTimeFrameData(await get.data);
    setRefreshBtn(false);
  };

  const handleUpdate = async (i) => {
    // setTimeFrameData(null)
    i.is_active = !i.is_active;
    let up = await axios.put(route("administrator.time_frame.put", i.id), i);
    // console.dir(await up.data);

    // setTimeFrameData(timeFrameData => {
    //   is_active: !is_active
    // });
    handleReloadButton();
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
          <TableView tbody={timeFrameData} updateActive={handleUpdate} />
          {/* end page */}
        </div>
      </div>
    </Authenticated>
  );
};

export default TimeFrame;
