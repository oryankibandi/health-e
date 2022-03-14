import {
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  ClipboardListIcon,
  CreditCardIcon,
  LogoutIcon,
  MailIcon,
  MenuAlt3Icon,
  SearchIcon,
  UsersIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import React from 'react'
import DashboardNav from '../../components/dashboardNav'
import DashboardNavItem from '../../components/dashboardNavItem'
import PatientResultTile from '../../components/patientResultTile'

function PatientsPage() {
  return (
    <div className="scrollbar-hidden flex h-screen flex-col bg-white sm:flex-row">
      {/* Sidebar */}
      <div className="mx-4 items-center justify-center bg-gray-200 px-2 py-1 ">
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

      <div className=" flex h-screen flex-1 flex-col space-y-2 p-4">
        {/* body */}
        <div className="flex items-center justify-between rounded-lg bg-gray-200 px-4 py-4">
          <h1 className="md:3xl sm:2xl font-Sansita text-xl  lg:text-4xl">
            Patients
          </h1>
          <div className="flex space-x-2">
            <MailIcon className="hover:period-40 h-5 w-5 cursor-pointer  hover:transform hover:animate-bounce hover:text-[#08BEF8] md:h-8 md:w-8" />
            <BellIcon className="hover:period-40 h-5 w-5 cursor-pointer  hover:transform hover:animate-bounce hover:text-[#08BEF8] md:h-8 md:w-8" />
            <MenuAlt3Icon className="hover:period-40 h-5 w-5 cursor-pointer  hover:scale-110 hover:transform hover:text-[#08BEF8] md:h-8 md:w-8" />
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex items-center rounded-lg bg-gray-200 px-4 py-4">
          <div className="flex flex-1 items-center rounded-lg bg-gray-50">
            <SearchIcon className="mx-2 h-5 w-5" />
            <input
              type="text"
              placeholder="Search patient ID Number"
              className="flex-1 p-2 font-Sansita outline-none"
            />
          </div>
        </div>
        {/* Results and recent */}
        <div className=" flex flex-1 flex-col items-center justify-start overflow-y-auto rounded-lg bg-gray-200">
          <h1 className=" mb-4 border-b-2 border-[#08BEF8] px-8 font-Sansita text-lg">
            Recent
          </h1>
          {/* results and recents */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 overflow-y-auto py-2 px-2 scrollbar-hide md:grid-cols-3 md:gap-x-6 md:gap-y-4 lg:grid-cols-4">
            <PatientResultTile
              profileImage="/assets/images/IanKibandi.jpg"
              name="Ian Kibandi"
              idNo={35589644}
              sex="Male"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/jeremy.jpeg"
              name="Jeremiah Gichuki"
              idNo={35589644}
              sex="Male"
              age={22}
            />
            <PatientResultTile
              profileImage="/assets/images/joanne.jpeg"
              name="Joanne Wanjiku"
              idNo={35589644}
              sex="Female"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/sonnie.jpeg"
              name="Sheryl Muthoni"
              idNo={35589644}
              sex="Female"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/steve.jpeg"
              name="Steve Munene"
              idNo={35569416}
              sex="Male"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/steve.jpeg"
              name="Steve Munene"
              idNo={35569416}
              sex="Male"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/steve.jpeg"
              name="Steve Munene"
              idNo={35569416}
              sex="Male"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/steve.jpeg"
              name="Steve Munene"
              idNo={35569416}
              sex="Male"
              age={23}
            />
            <PatientResultTile
              profileImage="/assets/images/steve.jpeg"
              name="Steve Munene"
              idNo={35569416}
              sex="Male"
              age={23}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientsPage
