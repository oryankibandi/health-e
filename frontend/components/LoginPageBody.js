import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

function LoginPageBody() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [isRegistering, setIsRegistering] = useState(false)
  const router = useRouter()

  function stateToggle() {
    setIsRegistering(!isRegistering)
  }

  async function signIn() {
    console.log('email:', emailRef.current.value)
    console.log('password:', passwordRef.current.value)
    //post request to backend
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    await axios
      .post('http://localhost:3001/user/login', credentials, {
        withCredentials: true,
      })
      .then((response) => {
        //console.log(response.data)
        if (response.data.success) {
          console.log(response.data.message)
          router.push('/')
        } else {
          console.log(response.data.error)
        }
      })
      .catch((error) => console.log('something went wrong:', error))

    emailRef.current.value = null
    passwordRef.current.value = null
  }

  return (
    <div className="mt-28 flex items-center justify-around py-5 font-Sansita">
      {/* LoginCard */}
      <div className=" flex flex-col items-center space-y-4 rounded-lg bg-white bg-opacity-60 py-4 px-6 sm:space-y-6 sm:py-8  sm:px-10 md:space-y-9 md:px-14 md:py-12">
        <h1 className="text-lg">{isRegistering ? 'Register' : 'Login'}</h1>
        {isRegistering && (
          <input
            type="text"
            placeholder="name"
            className="rounded-sm p-2 outline-none md:px-6"
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="email"
          className="rounded-sm p-2 outline-none  md:px-6"
        />
        {isRegistering && (
          <input
            type="number"
            placeholder="Id No."
            className="rounded-sm p-2 outline-none md:px-6"
          />
        )}
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          className="rounded-sm p-2 outline-none md:px-6"
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="confirm password"
            className="rounded-sm p-2 outline-none md:px-6"
          />
        )}

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-[#08BEF8] px-8 py-1 hover:bg-[#043849] hover:text-[#08BEF8] active:bg-white md:px-6"
          onClick={() => signIn()}
        >
          {isRegistering ? 'Create Account' : 'Login'}
        </button>
        <div className="flex text-xs">
          <h4>
            {isRegistering
              ? 'Already have an account?'
              : "Don't have an account?"}
          </h4>
          <h4
            onClick={() => stateToggle()}
            className="cursor cursor-pointer text-[#08BEF8] hover:text-[#043849]"
          >
            {isRegistering ? 'Sign in' : 'Sign Up'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default LoginPageBody
