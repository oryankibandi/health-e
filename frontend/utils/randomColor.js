function randomColor() {
  const colors = [
    'text-red-500',
    'text-blue-500',
    'text-slate-700',
    'text-orange-500',
    'text-lime-900',
    'text-emerald-500',
    'text-teal-500',
    'text-indigo-500',
    'text-purple-800',
    'text-pink-400',
  ]

  const index = Math.floor(Math.random() * 10)

  return colors[index]
}

export default randomColor
