import React, { useState, useRef } from 'react'
import DashboardSidebar from '../../../../components/dashboardSidebar'
import { useRouter } from 'next/router'
import { PlusCircleIcon } from '@heroicons/react/solid'
import Modal from '../../../../components/modal'

function NewRecord() {
  const router = useRouter()
  const { patientId } = router.query
  const [showModal, setShowModal] = useState(false)

  const testNameRef = useRef(null)
  const testResultsRef = useRef(null)
  const notesRef = useRef(null)
  const symptomRef = useRef(null)
  const diagnosisRef = useRef(null)
  const medicineRef = useRef(null)
  const frequencyRef = useRef(null)

  const newRecord = {}
  const symptoms = []
  const tests = []
  const diagnosis = []
  const prescriptions = []
  const addNotes = []

  function onClose() {
    setShowModal(false)
  }

  //verify fields and compile the test data
  function handleAddTest() {
    const testName = testNameRef.current.value.trim()
    const testResults = testResultsRef.current.value.trim()
    const notes = notesRef.current.value.trim()

    if (testName.length == 0 || testResults.length == 0 || notes.length == 0) {
      return alert('All fields need to be filled')
    }

    console.log('name: ', testName)
    console.log('Results: ', testResults)
    console.log('notes: ', notes)
    const test = {
      name: testName,
      results: testResults,
      notes: notes,
    }

    tests.push(test)

    testNameRef.current.value = null
    testResultsRef.current.value = null
    notesRef.current.value = null

    onClose()
  }

  //add symptom
  function addSymptom() {
    const sympt = symptomRef.current.value.trim()
    if (sympt.length == 0) return alert('symptom field is empty')

    symptoms.push(sympt)
    console.log('symptoms:', symptoms)
  }

  function handleAddDiagnosis() {
    const diagnosisText = diagnosisRef.current.value.trim()
    if (diagnosisText.length == 0) return alert('symptom field is empty')

    diagnosis.push(diagnosisText)
    console.log('diagnosis:', diagnosis)
  }

  function handleAddPrescription() {
    const medicine = medicineRef.current.value.trim()
    const frequency = frequencyRef.current.value.trim()

    if (medicine.length == 0 || frequency.length == 0)
      return alert('medicine or frequency field is empty')

    const prescription = {
      prescription: medicine,
      frequency: frequency,
    }

    prescriptions.push(prescription)
    console.log('Prescriptions: ', prescriptions)
  }

  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <div className="flex items-center justify-between rounded-lg  bg-gradient-to-r from-gray-200 to-[#c6ecf8] px-4 py-4">
          <h1 className="md:3xl sm:2xl font-Sansita text-xl  lg:text-4xl">
            New Record
          </h1>
          <div className="flex space-x-2">
            <img
              src="/assets/images/IanKibandi.jpg"
              className="h-12 w-12 rounded-full"
            />
          </div>
        </div>
        {/* symptoms */}
        <div className="grid h-full grid-cols-3 rounded-lg bg-gradient-to-br from-gray-200 to-[#08BEF8] p-6">
          <div className="flex h-80 w-80 flex-col items-center justify-start space-y-2 rounded-lg bg-gray-200 p-2">
            <h1 className="font-Sansita text-2xl text-[#08BEF8] ">Symptoms</h1>
            <div className="flex items-center justify-center space-x-2 ">
              <input
                ref={symptomRef}
                type="text"
                placeholder="Symptom 1"
                className="ml-2 rounded-lg px-2 py-2 text-center outline-none"
              />
              <PlusCircleIcon
                className="h-8 w-8 cursor-pointer rounded-full text-[#08BEF8] hover:text-[#3f90ac]"
                onClick={addSymptom}
              />
            </div>
          </div>
          {/* tests */}
          <div className="flex h-80 w-80 flex-col items-center justify-start space-y-2 rounded-lg bg-gray-200 p-2 font-Sansita">
            <h1 className="font-Sansita text-2xl text-[#08BEF8]">Tests</h1>
            <div className="flex h-full w-full items-center justify-center space-x-2 ">
              <h1>No tests added yet</h1>
            </div>
            <button
              className="relative bottom-2 rounded-3xl border-2 border-[#08BEF8] bg-white px-6 py-2 font-Sansita hover:bg-[#08BEF8] hover:text-white "
              onClick={() => setShowModal(true)}
            >
              Add tests
            </button>
          </div>
          {/* diagnosis */}
          <div className="flex h-80 w-80 flex-col items-center justify-start space-y-2 rounded-lg bg-gray-200 p-2">
            <h1 className="font-Sansita text-2xl text-[#08BEF8]">Diagnosis</h1>
            <div className="flex flex-col items-center justify-center space-y-2 ">
              <input
                ref={diagnosisRef}
                type="text"
                placeholder="What is your diagnosis?"
                className="ml-2 rounded-lg px-2 py-2 text-center outline-none"
              />
              <button
                className="rounded-3xl border-2 border-[#08BEF8] bg-white px-6 py-2 font-Sansita hover:bg-[#08BEF8] hover:text-white"
                onClick={handleAddDiagnosis}
              >
                Save
              </button>
            </div>
          </div>
          {/* prescription */}
          <div className="flex w-[1200px] justify-around space-x-2 ">
            <div className=" flex h-80 w-[600px] flex-col items-center justify-start space-y-2 rounded-lg bg-gray-200 p-2">
              <h1 className="font-Sansita text-2xl text-[#08BEF8]">
                Precription
              </h1>
              <div className="flex items-center justify-center space-x-2 ">
                <input
                  ref={medicineRef}
                  type="text"
                  placeholder="Medicine"
                  className=" rounded-lg px-2 py-2 text-center outline-none"
                />
                <input
                  ref={frequencyRef}
                  type="text"
                  placeholder="frequency eg. 2x3"
                  className=" rounded-lg px-2 py-2 text-center outline-none"
                />
              </div>
              <button
                className=" relative bottom-0 rounded-3xl border-2 border-[#08BEF8] bg-white px-6 py-2 font-Sansita hover:bg-[#08BEF8] hover:text-white"
                onClick={handleAddPrescription}
              >
                Add Prescription
              </button>
            </div>
            <div className=" flex h-80 w-[600px] flex-col items-center justify-start space-y-2 rounded-lg bg-gray-200 p-2">
              <h1 className="font-Sansita text-2xl text-[#08BEF8]">
                Additional notes
              </h1>
              <div className="flex items-center justify-center space-x-2 ">
                <input
                  type="text"
                  placeholder="Extra notes"
                  className="ml-2 rounded-lg px-2 py-2 text-center outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tests popup */}
      <Modal show={showModal} onClose={onClose}>
        <div className="flex h-[80%] w-full items-start justify-between  font-Sansita">
          <div className="flex flex-col space-y-2">
            <label className="flex flex-col">
              Name of the test:
              <input
                ref={testNameRef}
                type="text"
                placeholder="Name of test"
                className="rounded-lg px-2 py-2 outline-none"
              />
            </label>

            <label for="text" className="flex flex-col">
              Test Results:
              <textarea
                ref={testResultsRef}
                rows="5"
                cols="33"
                about="test results"
                className="rounded-lg px-2 py-2 outline-none"
              ></textarea>
            </label>
          </div>
          <div className="flex">
            <label for="text" className="flex flex-col p-2">
              Additional notes:
              <textarea
                ref={notesRef}
                rows="5"
                cols="50"
                about="test results"
                className="rounded-lg px-2 py-2 outline-none"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center  ">
          <button
            className="translate-x-[50%] transform rounded-3xl border-2 border-white px-4 py-2 font-Sansita text-white hover:bg-[#b4c9cf]"
            onClick={handleAddTest}
          >
            Add test
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default NewRecord
