import Head from 'next/head'
import Image from 'next/image'

import HomePage from './homepage'

const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 bg-cover bg-center scrollbar-hide">
      {/* homepage */}
      <HomePage />
    </div>
  )
}

export default Home
