import React, { useState, useEffect } from 'react'
import randomColor from '../utils/randomColor.js'

function StatisticTile({ name, number }) {
  //randomize and return a color
  function randomColors() {
    const colors = [
      'text-red-500',
      'text-blue-500',
      'text-slate-700',
      'text-orange-500',
      'text-lime-500',
      'text-emerald-500',
      'text-green-600',
      'text-indigo-500',
      'text-purple-800',
      'text-violet-800',
    ]

    return colors[Math.floor(Math.random() * 10)]
  }

  const [statColor, setStatColor] = useState(null)

  useEffect(async () => {
    setStatColor(randomColors())
  }, [])

  return (
    <div className="bg- m-2 flex flex-shrink flex-col items-center justify-center rounded-lg bg-[#08BEF8] p-2">
      <h2 className={`text-white`}>{name}</h2>
      <h1 className={`text-6xl font-extrabold ${statColor}`}>{number}</h1>
    </div>
  )
}

export default StatisticTile
