import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({ show, children, onClose }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => setIsBrowser(true), [])

  function handleClose(e) {
    e.preventDefault()
    onClose()
  }

  if (isBrowser && show) {
    return ReactDOM.createPortal(
      <>
        <div className="absolute top-0 left-0 right-0 bottom-0  bg-black opacity-50" />
        <div className="period-500 absolute top-[50%] left-[50%] z-10 h-[60%] w-[60%] translate-x-[-50%] translate-y-[-50%] transform space-y-2 rounded-lg bg-gradient-to-b from-gray-200 to-[#08BEF8] p-4 ease-in-out">
          <div className="flex justify-between">
            <h1 className="font-Sansita text-2xl text-[#08BEF8]">Add Test</h1>
            <button
              className="rounded-lg border-2 border-black px-2 font-Sansita text-lg hover:bg-[#08BEF8]"
              onClick={(e) => handleClose(e)}
            >
              &times;
            </button>
          </div>
          {children}
        </div>
      </>,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

export default Modal
