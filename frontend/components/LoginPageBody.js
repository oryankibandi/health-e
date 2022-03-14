import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { userIdAtom, userAccessTokenAtom } from '../atoms/userAtom'

function LoginPageBody() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const usernameRef = useRef(null)
  const phoneNumberRef = useRef(null)
  const idNoRef = useRef(null)
  const [isRegistering, setIsRegistering] = useState(false)
  const [countryCode, setCountryCode] = useState(254)
  const router = useRouter()

  const setUserId = useSetRecoilState(userIdAtom)
  const setAccessToken = useSetRecoilState(userAccessTokenAtom)

  function stateToggle() {
    setIsRegistering(!isRegistering)
  }

  async function signIn(status) {
    if (status === 0) {
      //signing in
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
            router.push('/dashboard')
          } else {
            emailRef.current.value = null
            passwordRef.current.value = null
            console.log(response.data.error)
          }
        })
        .catch((error) => console.log('something went wrong:', error))
      emailRef.current.value = null
      passwordRef.current.value = null
    } else {
      const credentials = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        username: usernameRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        nationalId: idNoRef.current.value,
        nationality: countryCode,
        password: passwordRef.current.value,
        roles: [2345],
      }
      console.log(credentials)

      await axios
        .post('http://localhost:3001/user/register', credentials, {
          withCredentials: true,
        })
        .then(async (response) => {
          if (response.data.success) {
            console.log(response.data.newUserId)
            //set the userId atom to id from response
            setUserId((old) => response.data.newUserId)
            //reseting input fields
            emailRef.current.value = null
            passwordRef.current.value = null
            phoneNumberRef.current.value = null
            phoneNumberRef.current.value = null
            idNoRef.current.value = null

            //log in user
            await axios
              .post('http://localhost:3001/user/login', {
                email: credentials.email,
                password: credentials.password,
              })
              .then((res) => {
                setAccessToken((old) => res.data.accessToken)
                //navigate to clinic registration page
                router.push('/dashboard')
              })
              .catch((err) =>
                console.error('something went wrong while logging in: ', err)
              )
          } else {
            alert(response.data.error)
          }
        })
        .catch((error) => {
          console.log('something went wrong:', error)
        })
    }
  }

  return (
    <div className="mt-16 flex items-center justify-around py-3 font-Sansita">
      {/* LoginCard */}
      <div className=" flex flex-col items-center space-y-4  rounded-lg bg-white bg-opacity-60 py-4 px-6 sm:space-y-6  sm:py-8 sm:px-10 md:space-y-7 md:px-14 md:py-10">
        <h1 className="text-lg">{isRegistering ? 'Register' : 'Login'}</h1>
        {isRegistering && (
          <input
            ref={usernameRef}
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
            ref={idNoRef}
            type="number"
            placeholder="Id No."
            className="rounded-sm p-2 outline-none md:px-6"
          />
        )}
        {/* country code.TODO: Render this dynamically */}
        {isRegistering && (
          <select
            className="w-full rounded-sm bg-white p-2 outline-none md:px-6"
            onChange={(e) => {
              setCountryCode(e.target.value)
              console.log(e.target.value)
            }}
          >
            <option value={254}>Kenya</option>
            <option value={255}>Tanzania</option>
            <option value={256}>Uganda</option>
            <option value={250}>Rwanda</option>
            <option value={257}>Burundi</option>
          </select>
        )}
        {isRegistering && (
          <input
            ref={phoneNumberRef}
            type="text"
            placeholder="Phone No."
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
          onClick={() => signIn(isRegistering ? 1 : 0)}
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
