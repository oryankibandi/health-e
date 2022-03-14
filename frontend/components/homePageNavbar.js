import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomePageNavbar() {
  return (
    <div className="py-15 flex h-20 flex-row items-center justify-between bg-black px-5 font-Sansita opacity-80 scrollbar-hide md:px-10 lg:px-28">
      <Image
        src="/assets/icons/health-e.svg"
        width={180}
        height={100}
        className="text-white"
      />
      <img
        src="/assets/icons/menu-blue.svg"
        className="border-color:white h-10 w-10 cursor-pointer rounded-md border-2 hover:bg-white sm:hidden"
      />
      <div className=" lg:space-x-15 hidden items-center justify-around space-x-2 text-white sm:flex sm:space-x-5 md:space-x-7 xl:space-x-20">
        <h1 className="navbarItem">Services</h1>
        <h1 className="navbarItem">Contacts</h1>
        <h1 className="navbarItem">About</h1>
        <h1 className="navbarItem">Pricing</h1>
        <Link href="/loginPage">
          <button className="cursor-pointer rounded-2xl border-2 p-2 hover:border-[#08BEF8] hover:bg-white hover:text-[#08BEF8]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePageNavbar
