import React from 'react'
import DoctorLog from './doctorLog'
import PaymentTile from './paymentTile'

function DoctorsLogsTile() {
  return (
    <div className="flex h-[85%] flex-1 flex-shrink flex-col  justify-start bg-white">
      <div className="flex  w-full items-center justify-center bg-[#08BEF8]">
        <h1 className="py-2 font-Sansita text-white">Doctors Logs</h1>
      </div>

      <div className="flex flex-col space-y-2 overflow-y-auto">
        <DoctorLog
          name="James Maina"
          description="Created Record"
          time="10:45am"
        />
        <DoctorLog
          name="Maryanne N."
          description="Registered Patient"
          time="9:30am"
        />
        <DoctorLog
          name="Wilfred Kioko"
          description="Created Record"
          time="9:29am"
        />
        <DoctorLog
          name="James Maina"
          description="Created Record"
          time="8:45am"
        />
        <DoctorLog
          name="Wilfred Kioko"
          description="Created Record"
          time="8:00am"
        />
      </div>
    </div>
  )
}
export default DoctorsLogsTile
