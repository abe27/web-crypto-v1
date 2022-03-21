import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Header, MetaHeader, TableView } from "@/Components";

const expData = [

];

const TimeFrame = (props) => {
  const [timeFrameData, setTimeFrameData] = useState(expData);
  const [addBtn, setAddBtn] = useState(false);
  const [refreshBtn, setRefreshBtn] = useState(false);

  console.dir(props);
  const handleAddButton = () => {
    setAddBtn(true);
    setTimeout(() => setAddBtn(false), 3500);
  };

  const handleReloadButton = () => {
    setRefreshBtn(true);
    setTimeout(() => setRefreshBtn(false), 3500);
  };

  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <MetaHeader title={props.title} description={props.description} />

      {/* Page title starts */}
      <Header
        title="จัดการช่วงเวลาในการดึงข้อมูล"
        breadcrumb={props.breadcrumbs}
        addLoading={addBtn}
        routeTo='administrator.time_frame.create'
        refreshLoading={refreshBtn}
        handleReloadButton={handleReloadButton}
      />
      {/* Page title ends */}
      <div className="container mx-auto">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
          <TableView />
          {/* end page */}
        </div>
      </div>
    </Authenticated>
  );
};

export default TimeFrame;
