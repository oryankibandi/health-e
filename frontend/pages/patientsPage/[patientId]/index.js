import React from 'react'
import { useRouter } from 'next/router'
import DashboardSidebar from '../../../components/dashboardSidebar'
import {
  BellIcon,
  MailIcon,
  MenuAlt3Icon,
  PlusIcon,
} from '@heroicons/react/outline'
import RecordTile from '../../../components/recordTile'

function PatientDashboard() {
  const router = useRouter()
  const patientId = router.query.patientId

  function handleNewRecordRoute() {
    router.push(`${patientId}/records/newRecord`)
  }

  return (
    <div className="flex overflow-y-auto scrollbar-hide">
      {/* Sidebar */}
      <DashboardSidebar />
      {/* body */}
      <div className="h-screen flex-1 flex-col space-y-2 overflow-y-auto p-4 scrollbar-hide">
        {/* Top Panel */}
        <div className="flex items-center justify-between rounded-lg bg-gray-200 px-4 py-4">
          <h1 className="md:3xl sm:2xl font-Sansita text-xl  lg:text-4xl">
            Ian Kibandi
          </h1>
          <div className="flex space-x-2">
            <MailIcon className="hover:period-40 h-5 w-5 cursor-pointer  hover:transform hover:animate-bounce hover:text-[#08BEF8] md:h-8 md:w-8" />
            <BellIcon className="hover:period-40 h-5 w-5 cursor-pointer  hover:transform hover:animate-bounce hover:text-[#08BEF8] md:h-8 md:w-8" />
            <MenuAlt3Icon className="hover:period-40 h-5 w-5 cursor-pointer  hover:scale-110 hover:transform hover:text-[#08BEF8] md:h-8 md:w-8" />
          </div>
        </div>
        {/* Patient Info */}
        <div className="flex items-center justify-around rounded-lg bg-gray-200 px-4 py-6 font-Sansita">
          <img
            src="/assets/images/IanKibandi.jpg"
            className="h-40 w-40 rounded-full"
          />

          <ol>
            <li>D.O.B : Dec 2, 1998</li>
            <li>Id Number : {patientId}</li>
            <li>Phone No: +254701724629</li>
            <li>Location: Juja,Kenya</li>
          </ol>
          <div className="flex flex-col">
            <ol>
              <li>Gender : Male</li>
              <li>Height : 1.75m</li>
              <li>Weight: 70kg</li>
              <li>BMI: 21.0</li>
              <li>Pre-existing conditions: Diabetes,HIV</li>
            </ol>
            <button className="mt-4 rounded-xl bg-[#08BEF8] p-2  hover:bg-[#08556e] hover:text-white">
              Edit Details
            </button>
          </div>
        </div>
        {/*  Recent records */}
        <div className="flex-2 flex flex-col items-center rounded-lg bg-gray-200 px-4 py-6 font-Sansita ">
          <h1 className="border-b-2 border-[#08BEF8] px-8 text-center text-lg">
            Recent Records
          </h1>
          {/* Record Tiles */}
          <div className="mt-2 mb-2 h-96 w-full flex-col space-y-2 overflow-y-scroll rounded-lg scrollbar-hide">
            <RecordTile
              patientId={patientId}
              clinic="I-Med Clinic"
              date="22 March,2022"
              diagnosis="Malaria"
            />
            <RecordTile
              patientId={patientId}
              clinic="Herbal Clinic"
              date="21 March,2022"
              diagnosis="Cold"
            />
            <RecordTile
              patientId={patientId}
              clinic="Jkuat Hospital"
              date="20 March,2022"
              diagnosis="Muscle tear"
            />
            <RecordTile
              patientId={patientId}
              clinic="Herbal Clinic"
              date="18 March,2022"
              diagnosis="Covid"
            />
            <RecordTile
              patientId={patientId}
              clinic="I-Med Clinic"
              date="22 Feb,2022"
              diagnosis="Cholera"
            />
            <RecordTile
              patientId={patientId}
              clinic="I-Med Clinic"
              date="15 Feb,2022"
              diagnosis="Diarrhoea"
            />
            <RecordTile
              patientId={patientId}
              clinic="Herbal Clinic"
              date="2 Feb,2022"
              diagnosis="Ulcers"
            />
            <RecordTile
              patientId={patientId}
              clinic="Jkuat Hospital"
              date="22 Jan,2022"
              diagnosis="Back Pain"
            />
          </div>
          <button
            className="mt-1 flex items-center rounded-lg bg-[#08BEF8] px-4 py-2 hover:bg-[#054257] hover:text-white"
            onClick={handleNewRecordRoute}
          >
            <PlusIcon className="mx-2 h-5 w-5" />
            Create New Record
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
