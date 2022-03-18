import React from 'react'
import Authenticated from '@/Layouts/Authenticated'
import { Head } from '@inertiajs/inertia-react'
import { Header } from '@/Components'

const Dashboard = (props) => {
  return (
    <Authenticated auth={props.auth} errors={props.errors}>
      <Head title="บทความข่าวสารประชาสัมพันธ์" />

      {/* Page title starts */}
      <Header title="บทความข่าวสารประชาสัมพันธ์" />
      {/* Page title ends */}
      <div className="container mx-auto px-6">
        <div className="w-full h-64 rounded">
          {/* Place your content here */}
        </div>
      </div>
    </Authenticated>
  )
}

export default Dashboard;
