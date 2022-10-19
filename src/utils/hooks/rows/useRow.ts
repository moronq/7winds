import React from 'react'

import { useOnClickOutside } from '../useOnClickOutside'

export const useRow = <T extends Object>(value: T) => {
  const [isEditing, setIsEditing] = React.useState(true)
  const refForm = React.useRef<HTMLFormElement>(null)
  const ref = React.useRef<HTMLInputElement>(null)

  const [values, setValues] = React.useState<T>(value)

  useOnClickOutside(refForm, () => setIsEditing(false))

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setValues({ ...values, [field]: e.target.value })
  }

  const startEditing = () => {
    setIsEditing(true)
  }
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false)
  }

  return { ref, refForm, isEditing, values, startEditing, stopEditing, onChangeHandler }
}
