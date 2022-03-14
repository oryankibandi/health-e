import React, { useRef } from 'react'
import axios from 'axios'
import { useRecoilValue } from 'recoil'
import { userIdAtom } from '../atoms/userAtom'
import { useSetRecoilState } from 'recoil'
import { clinicAtom } from '../atoms/clinicAtom'
import { useRouter } from 'next/router'

function ClinicRegistrationBody() {
  const userId = useRecoilValue(userIdAtom)
  console.log('userId', userId)
  const clinicNameRef = useRef(null)
  const clinicImageRef = useRef(
    'https://lh5.googleusercontent.com/p/AF1QipP2_Dtgdy8Uyy8K18xO75Y_CznN1he6BtsNRIf9=w408-h306-k-no'
  )
  const clinicLocationRef = useRef(null)
  const clinicOpenRef = useRef(null)
  const clinicCloseRef = useRef(null)
  const setClinicDetails = useSetRecoilState(clinicAtom)
  const router = useRouter()

  async function registerClinic() {
    const clinicDetails = {
      name: clinicNameRef.current.value,
      image: clinicImageRef.current.value,
      location: clinicLocationRef.current.value,
      opening: clinicOpenRef.current.value,
      closing: clinicCloseRef.current.value,
      admin: userId,
    }

    await axios
      .post('http://localhost:3001/clinic/register', clinicDetails, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.newClinic)
          setClinicDetails((old) => res.data.newClinic)
          router.push('/dashboard')
        } else {
          alert(res.data.error)
        }
      })
      .catch((err) =>
        console.log('Something went Wrong while registering clinic:', err)
      )
  }

  return (
    <div className="mt-28 flex items-center justify-around py-5 font-Sansita">
      <div className="flex flex-col items-center justify-center space-y-4  rounded-lg bg-white bg-opacity-60 py-4 px-6 sm:space-y-6  sm:py-8 sm:px-10 md:space-y-9 md:px-14 md:py-12">
        <h1>Clinic Details</h1>
        <input
          ref={clinicNameRef}
          type="text"
          placeholder="name of clinic"
          className="rounded-sm p-2 outline-none md:px-6"
        />
        <input
          ref={clinicLocationRef}
          type="text"
          placeholder="location"
          className="rounded-sm p-2 outline-none md:px-6"
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <h2>Upload an image of the clinic</h2>
          <input
            type="file"
            placeholder="Image"
            className="rounded-sm bg-gray-300 p-2 md:px-6"
          />
        </div>

        <input
          ref={clinicOpenRef}
          type="text"
          placeholder="opening hours"
          className="rounded-sm p-2 outline-none md:px-6"
        />
        <input
          ref={clinicCloseRef}
          type="text"
          placeholder="closing hours"
          className="rounded-sm p-2 outline-none md:px-6"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-[#08BEF8] px-8 py-1 hover:bg-[#043849] hover:text-[#08BEF8] active:bg-white md:px-6"
          onClick={() => registerClinic()}
        >
          Register clinic
        </button>
      </div>
    </div>
  )
}

export default ClinicRegistrationBody
