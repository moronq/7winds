import React from 'react'

import { useAppDispatch } from '@store/hooks/hook'

import { useOnClickOutside } from '../useOnClickOutside'

export const useRow = <T extends Object>(value: T) => {
  const [isEditing, setIsEditing] = React.useState(true)
  const refForm = React.useRef<HTMLFormElement>(null)
  const ref = React.useRef<HTMLInputElement>(null)

  const [values, setValues] = React.useState<T>(value)

  useOnClickOutside(refForm, () => setIsEditing(false))

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [isEditing])

  const onChangeHandler = <K extends keyof T>(value: string, field: K) => {
    setValues({ ...values, [field]: value })
  }

  const startEditing = () => {
    setIsEditing(true)
  }
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false)
  }

  return { ref, refForm, isEditing, values, dispatch, startEditing, stopEditing, onChangeHandler }
}
