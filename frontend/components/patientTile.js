import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

function PatientTile({ name, date }) {
  return (
    <div className="hover:period-1000 flex w-80 items-center justify-between rounded-md bg-gray-100 py-3 px-2 font-Sansita hover:scale-105 hover:transform hover:bg-gray-300 hover:transition sm:w-96 md:mx-8 md:px-8">
      {/* pictures */}
      <div className="flex">
        <img
          src="/assets/images/account.jpeg"
          className="h-10 w-10  rounded-full "
        />
        <div className="flex flex-col px-2">
          <h1>{name}</h1>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      <ChevronDownIcon className="h-5 w-5 cursor-pointer rounded-full hover:bg-gray-400" />
      {/* name and date */}
      {/* Chevron */}
    </div>
  )
}

export default PatientTile
