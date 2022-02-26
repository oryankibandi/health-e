import React from 'react'

function HomePageItem({ image, title }) {
  return (
    <div className="flex h-80 w-60 flex-col items-center justify-between space-y-5 rounded-md bg-[#064d64c7] py-16 px-2 font-Sansita">
      <img src={image} height="150" width="150" />
      <h1 className="text-xl text-white">{title}</h1>
    </div>
  )
}

export default HomePageItem
