export function getThemeClassNames(theme) {
  let classNames

  switch (theme) {
    case 'Brown':
      classNames = 'bg-[#ab6b51] text-blue-200'
      break
    case 'Gray':
      classNames = 'bg-zinc-800 text-zinc-200'
      break
    case 'Dark':
      classNames = 'bg-black text-white'
      break
    case 'White':
      classNames = 'bg-white text-black'
      break
    case 'Blue':
      classNames = 'bg-blue-500 text-yellow-100'
      break
    case 'Pink':
      classNames = 'bg-pink-500 text-emerald-400'
      break
    default:
      classNames = 'bg-white text-black'
      break
  }

  return classNames
}
