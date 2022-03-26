import React from 'react'
import DashboardNavItem from './dashboardNavItem'
import {
  ViewGridIcon,
  CalendarIcon,
  ChartPieIcon,
  CreditCardIcon,
  ClipboardListIcon,
  UsersIcon,
  LogoutIcon,
} from '@heroicons/react/solid'

function DashboardSidebar() {
  return (
    <div className="mx-4 items-center justify-center bg-gradient-to-b from-gray-200 to-[#c6ecf8] px-2 py-1 ">
      <div className=" mx-2 flex  flex-col items-center justify-center border-b-2 border-[#08BEF8] px-4">
        <img
          src="/assets/images/imed.jpg"
          className="h-40 w-40 cursor-pointer rounded-full hover:border-2 hover:border-[#08BEF8]"
        />
        <h1 className="font-Sansita text-2xl text-[#08BEF8]">I-Med Clinic</h1>
        <p className="mb-4 font-Sansita text-gray-600">Juja, Kiambu</p>
      </div>
      <div className="mt-2 hidden flex-col space-y-8 py-2 px-2 sm:inline-flex">
        <DashboardNavItem Icon={ViewGridIcon} title="Dashboard" />
        <DashboardNavItem title="Patients" Icon={UsersIcon} />
        <DashboardNavItem title="Schedule" Icon={CalendarIcon} />
        <DashboardNavItem title="Statistics" Icon={ChartPieIcon} />
        <DashboardNavItem title="Doctors Logs" Icon={ClipboardListIcon} />
        <DashboardNavItem title="Payments" Icon={CreditCardIcon} />
        <DashboardNavItem title="Logout" Icon={LogoutIcon} />
      </div>
    </div>
  )
}

export default DashboardSidebar
