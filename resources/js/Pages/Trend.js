import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import { Header } from '@/Components'

const Dashboard = (props) => {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="แสดงข้อมูลแนวโน้ม" />

      {/* Page title starts */}
      <Header title="ข้อมูลแนวโน้มสำหรับคุณ" />
      {/* Page title ends */}
      <div className="container mx-auto px-6">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
        </div>
      </div>
    </Authenticated>
  )
}

export default Dashboard
