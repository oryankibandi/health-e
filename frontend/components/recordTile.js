import React from 'react'
import { useRouter } from 'next/router'

function RecordTile({ patientId, clinic, date, diagnosis }) {
  const router = useRouter()

  function handleRecordRouting() {
    router.push(`${patientId}/records/8965`)
  }

  return (
    <div
      className="group hover:period-300 flex cursor-pointer justify-around rounded-lg px-5 py-2 hover:bg-gray-50 hover:transition hover:ease-in-out"
      onClick={handleRecordRouting}
    >
      <h1 className="text-lg">{clinic}</h1>
      <h2 className="text-[#08BEF8]">{date}</h2>
      <p>{diagnosis}</p>
      {/* <button className="z-50 hidden rounded-lg bg-[#08BEF8] px-6 py-1 text-white group-hover:inline-flex">
        View
      </button> */}
    </div>
  )
}

export default RecordTile
