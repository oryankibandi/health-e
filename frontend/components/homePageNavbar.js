import React from 'react'
import Image from 'next/image'

function HomePageNavbar() {
  return (
    <div className="py-15 flex h-20 w-screen flex-row items-center justify-between bg-black opacity-80">
      <Image
        src="/assets/icons/health-e.svg"
        width={180}
        height={100}
        className="text-white"
      />
      <div className="flex justify-around space-x-2 text-white">
        <h1>Services</h1>
        <h1>Contacs</h1>
        <h1>About</h1>
        <h1>Pricing</h1>
      </div>
    </div>
  )
}

export default HomePageNavbar
