import React from 'react'

import { Input } from '@common/fields'
import { useAppDispatch } from '@store/hooks/hook'
import { changeRow } from '@store/slices/rowSlice/rowSlice'
import { useRow } from '@utils/hooks'

import { CreateLevel } from '../CreateLevel/CreateLevel'

import styles from '../RowData.module.scss'

interface RowTypeRowDataProps extends Omit<RowData, 'parent' | 'type'> {
  parentHasParent: boolean
  isParentLast: boolean
  parentId: number | null
  parent: number | null
}

interface RowTypeRowDataFields {
  title: string
  unit: string
  quantity: number
  unitPrice: number
}

export const RowTypeRowData: React.FC<RowTypeRowDataProps> = ({
  parent,
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
  const dispatch = useAppDispatch()
  const { ref, refForm, isEditing, values, startEditing, onChangeHandler, stopEditing } =
    useRow<RowTypeRowDataFields>({
      title,
      quantity,
      unit,
      unitPrice
    })

  const onChangeRow = (type: 'level' | 'row') => {
    dispatch(
      changeRow({
        title: values.title,
        id,
        parent,
        price: values.quantity * values.unitPrice,
        quantity: values.quantity,
        type,
        unit: values.unit,
        unitPrice: values.unitPrice
      })
    )
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
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChangeRow('row')
                  stopEditing(e)
                }
              }}
              placeholder='Введите название работы'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unit}
              onChange={(e) => onChangeHandler(e, 'unit')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChangeRow('row')
                  stopEditing(e)
                }
              }}
              placeholder='Л'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.quantity}
              onChange={(e) => onChangeHandler(e, 'quantity')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChangeRow('row')
                  stopEditing(e)
                }
              }}
              placeholder='1200'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unitPrice}
              onChange={(e) => onChangeHandler(e, 'unitPrice')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onChangeRow('row')
                  stopEditing(e)
                }
              }}
              placeholder='850'
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
