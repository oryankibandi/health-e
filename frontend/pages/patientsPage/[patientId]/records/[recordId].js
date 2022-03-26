import React from 'react'
import { useRouter } from 'next/router'
import DashboardSidebar from '../../../../components/dashboardSidebar'
import { BellIcon, MailIcon, MenuAlt3Icon } from '@heroicons/react/outline'

function RecordPage() {
  const router = useRouter()

  const { patientId, recordId } = router.query
  return (
    <div className="flex h-screen ">
      <DashboardSidebar />
      {/* body */}
      <div className="flex flex-1 flex-col space-y-4 px-4 py-4">
        {/* header */}
        <div className="flex items-center justify-between rounded-lg bg-gray-200 px-4 py-4">
          <h1 className="md:3xl sm:2xl font-Sansita text-xl  lg:text-4xl">
            Ian Kibandi
          </h1>
          <div className="flex space-x-2">
            <img
              src="/assets/images/IanKibandi.jpg"
              className="h-12 w-12 rounded-full"
            />
          </div>
        </div>
        {/* Record Details */}
        <div className="grid h-full grid-cols-3 rounded-lg bg-gray-200 px-4 py-4">
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Clinic Details</h1>
            <ol className="list-disc py-2  font-mono text-lg">
              <li>I-Med Clinic</li>
              <li>Location : Juja,Kiambu</li>
              <li>22 Feb, 2022</li>
              <li>10:30am</li>
            </ol>
          </div>
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Symptoms</h1>
            <ol className="list-disc py-2 font-mono text-lg">
              <li>Headache</li>
              <li>Itchy Scalp</li>
              <li>Dandruff</li>
              <li>Rashes on forehead</li>
            </ol>
          </div>
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Tests Conducted</h1>
            <ol className="list-disc py-2  font-mono text-lg">
              <li>Maaria Test : Results Positive</li>
              <li>Blood Sugar Test :32mmg</li>
            </ol>
          </div>
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Diagnosis</h1>
            <p className="font-mono">Possible diagnosis : acute Malaria</p>
          </div>
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Prescription</h1>
            <ol className="list-disc py-2  font-mono text-lg">
              <li>Actenodosol : 2x3</li>
              <li>Ipobrufen : 2x3</li>
              <li>Antibiotics : 1x2</li>
            </ol>
          </div>
          <div className="flex h-80 w-96 flex-col items-center rounded-lg bg-gray-300 px-8 py-8">
            <h1 className="font-Sansita text-4xl">Recommendations</h1>
            <ol className="list-disc py-2 font-mono  text-lg">
              <li>No alcohol</li>
              <li>Regular exercise</li>
              <li>Avoid fatty fods</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecordPage
