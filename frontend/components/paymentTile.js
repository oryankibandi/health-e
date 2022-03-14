import React from 'react'

function PaymentTile({ name, date, amount }) {
  return (
    <div className="flex cursor-pointer justify-between bg-gray-100 px-3 py-1 font-Sansita hover:bg-gray-400">
      {name && (
        <div className="hover:period-500 flex w-full items-center justify-between hover:-translate-y-1 hover:transform hover:transition">
          <h1>{name}</h1>
          <p className="text-sm text-gray-600">{date}</p>
          <p className="text-sm text-gray-600">{amount}Ksh</p>
        </div>
      )}
    </div>
  )
}

export default PaymentTile
