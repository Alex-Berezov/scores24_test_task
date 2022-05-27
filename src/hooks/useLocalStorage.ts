import { useEffect, useState } from 'react'

export const useLocalStorage = (key: string, defaultValue: Array<string>) => {
  const stored = localStorage.getItem(key)
  const initial: Array<string> = stored ? JSON.parse(stored) : defaultValue
  const [addingValue, setAddingValue] = useState(initial)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (initial.find(item => item === value)) {
      setAddingValue(addingValue.filter(item => item !== value))
      setValue('')
    } else if (value === '') {
      setAddingValue(addingValue.filter(item => item !== ''))
    } else {
      setAddingValue([...addingValue, value])
      setValue('')
    }
  }, [value])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(addingValue))
  }, [addingValue])

  return [initial, setValue] as const
}