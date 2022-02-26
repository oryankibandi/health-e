import React from 'react'
import HomePageNavbar from '../../components/homePageNavbar'
import LoginPageBody from '../../components/LoginPageBody'
import LoginPageNav from '../../components/loginPageNav'

function LoginPage() {
  return (
    <div className="h-screen w-screen bg-loginPage bg-cover">
      <div className=" h-screen w-screen bg-[#08BEF8] bg-opacity-50">
        {/* Navbar */}
        <LoginPageNav />
        {/* body */}
        <LoginPageBody />
      </div>
    </div>
  )
}

export default LoginPage
