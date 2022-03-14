import React from 'react'

function DashboardNavItem({ Icon, title }) {
  return (
    <div className=" hover:period-300 flex w-full cursor-pointer items-center justify-start space-x-2 font-Sansita hover:transform hover:animate-bounce hover:text-[#08BEF8]">
      <Icon className="h-6 w-6 " />
      <h1 className="text-md">{title}</h1>
    </div>
  )
}

export default DashboardNavItem
