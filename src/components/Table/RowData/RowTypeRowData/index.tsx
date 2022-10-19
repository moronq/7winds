import React from 'react'

import { Input } from '@common/fields'

import { CreateLevel } from '../CreateLevel/CreateLevel'

import styles from '../RowData.module.scss'
import { useOnClickOutside } from '@utils/hooks'

interface RowTypeRowDataProps extends Omit<RowData, 'parent' | 'type'> {
  parentHasParent: boolean
  isParentLast: boolean
  parentId: number | null
}

interface RowTypeRowDataFields {
  title: string
  unit: string
  quantity: number
  unitPrice: number
}

export const RowTypeRowData: React.FC<RowTypeRowDataProps> = ({
  title,
  parentId,
  price,
  quantity,
  unit,
  unitPrice,
  parentHasParent,
  id,
  isParentLast = true
}) => {
  const [isEditing, setIsEditing] = React.useState(true)
  const refForm = React.useRef<HTMLFormElement>(null)
  const ref = React.useRef<HTMLInputElement>(null)

  const [values, setValues] = React.useState<RowTypeRowDataFields>({
    title: '',
    quantity: 0,
    unit: '',
    unitPrice: 0
  })

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

  return (
    <form ref={refForm} className={styles.rowData_container} onDoubleClick={startEditing}>
      <div className={styles.rowData_level_container} onDoubleClick={(e) => e.stopPropagation()}>
        <CreateLevel
          parentId={parentId}
          id={id}
          type='row'
          parent={true}
          parentHasParent={parentHasParent}
          isParentLast={isParentLast}
        />
      </div>
      {isEditing ? (
        <>
          <div>
            <Input
              inputRef={ref}
              type='text'
              value={values.title}
              onChange={(e) => onChangeHandler(e, 'title')}
              onKeyDown={(e) => stopEditing(e)}
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unit}
              onChange={(e) => onChangeHandler(e, 'unit')}
              onKeyDown={(e) => stopEditing(e)}
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.quantity}
              onChange={(e) => onChangeHandler(e, 'quantity')}
              onKeyDown={(e) => stopEditing(e)}
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unitPrice}
              onChange={(e) => onChangeHandler(e, 'unitPrice')}
              onKeyDown={(e) => stopEditing(e)}
            />
          </div>
        </>
      ) : (
        <>
          <div>{title}</div>
          <div>{unit}</div>
          <div>{quantity}</div>
          <div>{unitPrice}</div>
        </>
      )}
      <div>{price}</div>
    </form>
  )
}
