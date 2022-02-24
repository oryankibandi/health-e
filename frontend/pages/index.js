import Head from 'next/head'
import Image from 'next/image'
import HomePage from './homepage'

const Home = () => {
  return (
    <div className="bg-[url('https://www.fairplanet.org/wp-content/uploads/2017/08/clinic-kenya-1200x630.1502892754.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen flex-col  bg-[#08BEF8] opacity-60 ">
        {/* homepage */}
        <HomePage />
      </div>
    </div>
  )
}

export default Home
