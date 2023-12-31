type inputProps = {
  onChange: (value: string) => void
  placeholder: string
}

const Input = ({ onChange, placeholder }: inputProps) => {
  return (
    <input
      type="text"
      className="block w-[1/3] p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e) => {
        onChange(e.target.value)
      }}
      placeholder={placeholder}
    />
  )
}

export default Input
