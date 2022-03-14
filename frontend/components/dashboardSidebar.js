import React from 'react'
import DashboardNavItem from './dashboardNavItem'
import {
  ViewGridIcon,
  ChevronDownIcon,
  CalendarIcon,
  ChartPieIcon,
  CreditCardIcon,
  ClipboardListIcon,
  UsersIcon,
} from '@heroicons/react/solid'

function DashboardSidebar() {
  return (
    <div className="flex-0 flex h-full items-center justify-between overflow-y-auto bg-[#08BEF8] font-Sansita scrollbar-hide sm:flex-col sm:justify-start">
      <img
        src="/assets/images/imed.jpg"
        // width="150"
        // height="150"
        className="h-60 w-60"
      />
      <div className="mr-10 flex flex-col">
        <div className="flex flex-col justify-start  px-10 md:w-full">
          <h1 className="text-2xl">I-Med Clinic</h1>
          <p>Juja,Kiambu</p>
          <p>Admin: James</p>
        </div>
        <button className="mx-2 mt-5 flex cursor-pointer rounded-full bg-gray-100 p-2 hover:bg-gray-400 sm:hidden">
          <div className="flex w-full   items-center justify-center ">
            <h1>Dashboard</h1>
            <ChevronDownIcon className="flex  h-5 w-5 sm:hidden" />
          </div>
        </button>

        <div className="hidden w-full flex-col justify-start space-y-4  border-t-2 border-gray-600 px-2 py-1 sm:flex">
          <DashboardNavItem title="Dashboard" Icon={ViewGridIcon} />
          <DashboardNavItem title="Patients" Icon={UsersIcon} />
          <DashboardNavItem title="Schedule" Icon={CalendarIcon} />
          <DashboardNavItem title="Statistics" Icon={ChartPieIcon} />
          <DashboardNavItem title="Doctors Logs" Icon={ClipboardListIcon} />
          <DashboardNavItem title="Payments" Icon={CreditCardIcon} />
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar
