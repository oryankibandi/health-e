import React from 'react'

function PatientResultTile({ profileImage, name, idNo, sex, age }) {
  return (
    <div className="group  hover:period-1000 cursor-pointer rounded-lg bg-gray-50 px-8 py-6 text-center font-Sansita shadow-md hover:scale-105 hover:transform hover:ease-in-out">
      <img
        src={profileImage}
        alt="patient profile pic"
        className="group-hover:period-1000 mb-2 h-36 w-36 rounded-full group-hover:scale-105 group-hover:border-2 group-hover:border-[#08BEF8]"
      />
      <h1 className="group-hover:period-1000 text-lg text-[#08BEF8] group-hover:scale-105">
        {name}
      </h1>
      <h2 className="group-hover:period-1000 text-gray-600 group-hover:scale-105">
        {idNo}
      </h2>
      <p className="group-hover:period-1000 text-gray-600 group-hover:scale-105">
        {sex} | {age} Yrs
      </p>
    </div>
  )
}

export default PatientResultTile
