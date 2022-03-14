import React from 'react'
import ClinicRegistrationBody from '../../components/clinicRegistrationBody'
import LoginPageNav from '../../components/loginPageNav'

function clinicRegistration() {
  return (
    <div className="h-screen w-screen bg-loginPage bg-cover">
      <div className="h-screen w-screen bg-[#08BEF8] bg-opacity-50">
        <LoginPageNav />
        <ClinicRegistrationBody />
      </div>
    </div>
  )
}

export default clinicRegistration
