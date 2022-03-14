import React from 'react'
import PaymentTile from './paymentTile'
import ScheduleEvent from './scheduleEvent'

function PaymentsTile() {
  return (
    <div className="flex h-[85%] flex-1 flex-shrink flex-col  justify-start bg-white">
      <div className="flex  w-full items-center justify-center bg-[#08BEF8]">
        <h1 className="py-2 font-Sansita text-white">Payments</h1>
      </div>

      <div className="flex flex-col space-y-2 overflow-y-auto">
        <PaymentTile name="June Achieng" amount={250.0} date="23-03-2022" />
        <PaymentTile name="Mary Nafula" amount={750.0} date="23-03-2022" />
        <PaymentTile name="James Kiptoo" amount={1000.0} date="23-03-2022" />
        <PaymentTile name="Kennedy Mwaura" amount={600.0} date="23-03-2022" />
        <PaymentTile name="Janice Mwende" amount={250.0} date="23-03-2022" />
      </div>
    </div>
  )
}

export default PaymentsTile
