import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import PatientTile from './patientTile'

function PatientsTile() {
  const router = useRouter()
  return (
    <div className="flex-2 h-96 flex-grow bg-white scrollbar-hide">
      <div className="flex items-center justify-center bg-[#08BEF8]">
        <h1 className="py-2 font-Sansita text-lg text-white">Patients</h1>
      </div>
      <div className=" flex flex-col items-center justify-center space-y-3 overflow-y-auto  py-5 px-4 scrollbar-hide">
        <h1 className="w-full border-b-2 text-center font-Sansita">Recent</h1>
        <div className="flex flex-col overflow-y-auto scrollbar-hide">
          <PatientTile name="James Mwendwa" date="23-03-2022" />
          <PatientTile name="Lucy Njeri" date="23-03-2022" />
          <PatientTile name="Benard Omollo" date="24-03-2022" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="hover:period-300 rounded-lg bg-[#08BEF8] p-2 font-Sansita text-white hover:transform hover:animate-bounce"
          onClick={() => router.push('/patientsPage')}
        >
          Patients Page
        </button>
      </div>
    </div>
  )
}

export default PatientsTile
