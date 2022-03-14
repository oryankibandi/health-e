import React from 'react'
import HomePageItem from './HomePageItem'
import { useRouter } from 'next/router'

function HomepageBody() {
  const router = useRouter()
  return (
    <div className="w-screen flex-col items-center justify-center  px-0 py-0 text-center scrollbar-hide">
      <div className="h-screen space-y-3 bg-[#08BEF8] bg-opacity-60 px-2 py-4 sm:px-5 md:px-7 lg:px-9">
        <h1 className="flex-wrap font-Sansita text-4xl text-white  md:text-5xl lg:text-6xl">
          Worry less about your records. Leave that to us.
        </h1>
        <h4 className="font-Sansita italic">
          We help clinics manage and store their records safely. Worry less
          about how to store your patient's records and focus on providing the
          best service to your patient.
        </h4>
        <button
          className="w-80 rounded-full bg-gray-50 py-3 font-Sansita text-lg hover:bg-gray-500 hover:text-white"
          onClick={() => {
            router.push('/loginPage')
          }}
        >
          <h1>Get Started</h1>
        </button>
      </div>

      <div>
        <div className="mt-32 flex flex-col items-center justify-center space-y-5 sm:grid sm:grid-cols-2 sm:space-y-0 md:grid-cols-3 md:space-y-2 md:px-10">
          <HomePageItem
            title="Save on storage costs"
            image="/assets/images/costs.png"
          />
          <HomePageItem
            title="Easy access and sharing from all over the world"
            image="/assets/images/world.png"
          />
          <HomePageItem
            title="Secure from unauthorized access"
            image="/assets/images/secure.png"
          />
        </div>
      </div>
    </div>
  )
}

export default HomepageBody
