import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Header, MetaHeader, TableView } from "@/Components";

const PeriodHour = (props) => {
  const [addBtn, setAddBtn] = useState(false);
  const [refreshBtn, setRefreshBtn] = useState(false);
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
        routeTo="administrator.period.hour.create"
        refreshLoading={refreshBtn}
        handleReloadButton={handleReloadButton}
      />
      {/* Page title ends */}
      <div className="container mx-auto px-6">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
          <TableView />
        </div>
      </div>
    </Authenticated>
  );
};

export default PeriodHour;
