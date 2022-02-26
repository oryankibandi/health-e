import React from 'react'
import HomepageBody from '../../components/homepageBody'
import HomePageNavbar from '../../components/homePageNavbar'

function HomePage() {
  return (
    <div className="h-screen w-screen">
      <HomePageNavbar />
      <HomepageBody />
    </div>
  )
}

export default HomePage
