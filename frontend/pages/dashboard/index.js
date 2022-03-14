import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DashboardNav from '../../components/dashboardNav'
import DashboardTiles from '../../components/dashboardTiles'
import DashboardSidebar from '../../components/dashboardSidebar'

function Dashboard() {
  return (
    <div className=" w-screen bg-gray-300">
      {/* Navbar */}
      <DashboardNav />
      {/* dashboard body */}
      <div className="flex flex-col sm:flex-row">
        <DashboardSidebar />
        <DashboardTiles />
      </div>
    </div>
  )
}

export default Dashboard
