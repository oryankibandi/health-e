import React from 'react'
import DoctorsLogsTile from './doctorsLogsTile'
import PatientsTile from './patientsTile'
import PatientTile from './patientTile'
import PaymentsTile from './paymentsTile'
import ScheduleTile from './scheduleTile'
import StatisticsTIle from './statisticsTIle'

function DashboardTiles() {
  return (
    <div className="flex flex-col space-y-2 overflow-y-auto p-2 lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-2 lg:space-y-0 lg:space-x-2 ">
      {/* Patients Tile */}
      <PatientsTile />
      {/* Schedule Tile */}
      <ScheduleTile />
      {/* Statistics */}
      <StatisticsTIle />
      {/* Payments */}
      <PaymentsTile />
      {/* Doctor's log */}
      <DoctorsLogsTile />
    </div>
  )
}

export default DashboardTiles
