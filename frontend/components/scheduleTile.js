import React from 'react'
import ScheduleEvent from './scheduleEvent'

function ScheduleTile() {
  return (
    <div className="flex h-96 flex-1 flex-shrink flex-col  justify-start bg-white">
      <div className="flex  w-full items-center justify-center bg-[#08BEF8]">
        <h1 className="py-2 font-Sansita text-white">Schedule</h1>
      </div>
      <h2 className="flex items-center justify-center border-b-2 font-Sansita">
        Upcoming Consultations
      </h2>
      <div className="flex flex-col space-y-2 overflow-y-auto">
        <ScheduleEvent name="James Mworia" date="23-03-2022" />
        <ScheduleEvent name="Evan Gichuru" date="23-03-2022" />
        <ScheduleEvent name="Margaret Harnet" date="23-03-2022" />
        <ScheduleEvent name="Benard Ken" date="23-03-2022" />
      </div>
    </div>
  )
}

export default ScheduleTile
