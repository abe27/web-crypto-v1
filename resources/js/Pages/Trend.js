import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import { Header, TableView } from '@/Components'

const Dashboard = (props) => {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title="แสดงข้อมูลแนวโน้ม" />

      {/* Page title starts */}
      <Header title="ข้อมูลแนวโน้มสำหรับคุณ" />
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

export default Dashboard
