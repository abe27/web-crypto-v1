import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import { Header, TableView } from '@/Components'

const TimeFrame = (props) => {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title="จัดการช่วงเวลาในการดึงข้อมูล" />

      {/* Page title starts */}
      <Header title="จัดการช่วงเวลาในการดึงข้อมูล" />
      {/* Page title ends */}
      <div className="container mx-auto px-6">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
          <TableView />
          {/* end page */}
        </div>
      </div>
    </Authenticated>
  )
}

export default TimeFrame
