import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function DashboardNav() {
  const router = useRouter()

  return (
    <div className="py-15 sticky top-0 z-20 flex h-20 w-screen flex-row items-center justify-between bg-black px-5 font-Sansita opacity-80 scrollbar-hide md:px-10 lg:px-28">
      <Image
        src="/assets/icons/health-e.svg"
        width={180}
        height={100}
        className="cursor-pointer "
        onClick={() => {
          router.push('/')
        }}
      />

      <div className=" items-center space-x-2 text-white scrollbar-hide sm:flex md:space-x-5">
        <img
          src="/assets/images/account.jpeg"
          className="h-10 w-10 rounded-full"
        />
        <div className="hidden flex-col sm:flex">
          <p className="text-sm text-gray-700">Welcome</p>
          <h1>Ian Kibandi</h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav
