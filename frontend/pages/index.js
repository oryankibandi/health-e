import Head from 'next/head'
import Image from 'next/image'

import HomePage from './homepage'

const Home = () => {
  return (
    <div className="h-full bg-homePage bg-cover bg-center">
      <div className="flex h-full  bg-[#08BEF8] opacity-60 ">
        {/* homepage */}
        <HomePage />
      </div>
    </div>
  )
}

export default Home
