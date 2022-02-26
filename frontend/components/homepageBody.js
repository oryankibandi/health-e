import React from 'react'
import HomePageItem from './HomePageItem'

function HomepageBody() {
  return (
    <div className="flex-col items-center justify-center px-2 py-5 text-center">
      <h1 className="flex-wrap font-Sansita text-4xl text-white md:text-5xl lg:text-6xl">
        Worry less about your records. Leave that to us.
      </h1>
      <div className="mt-32 flex flex-col items-center justify-center space-y-5 sm:grid sm:grid-cols-2 sm:space-y-0 md:grid-cols-3 md:px-10">
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
  )
}

export default HomepageBody
