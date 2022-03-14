import React from 'react'
import StatisticTile from './statisticTile'

function StatisticsTIle() {
  return (
    <div className=" flex h-96 w-[90%] flex-col  justify-start bg-white font-Sansita ">
      <div className=" flex w-full items-center justify-center bg-[#08BEF8]">
        <h1 className="py-2 text-white">Statistics</h1>
      </div>
      <div className="grid grid-cols-2 ">
        <StatisticTile name="Consultation" number="25" />
        <StatisticTile name="Records" number="25" />
        <StatisticTile name="Earnings" number="5000" />
      </div>
      <div className=" mr-3 flex items-center justify-center">
        <button
          className="rounded-lg bg-[#08BEF8] p-2 text-white
        active:bg-[#063747]"
        >
          Detailed View
        </button>
      </div>
    </div>
  )
}

export default StatisticsTIle
