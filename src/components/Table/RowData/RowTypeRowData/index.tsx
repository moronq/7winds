import React from 'react'

import { Input } from '@common/fields'
import { changeRow } from '@store/slices/rowSlice/rowSlice'
import { numberCheck } from '@utils/form'
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
  const { ref, refForm, isEditing, values, dispatch, startEditing, onChangeHandler, stopEditing } =
    useRow<RowTypeRowDataFields>({
      title,
      quantity,
      unit,
      unitPrice
    })

  const onChangeRow = (type: Type) => {
    dispatch(
      changeRow({
        title: values.title,
        id,
        parent,
        price: parseFloat((values.quantity * values.unitPrice).toFixed(2)),
        quantity: parseFloat((values.quantity * 1).toFixed(2)),
        type,
        unit: values.unit,
        unitPrice: parseFloat((values.unitPrice * 1).toFixed(2))
      })
    )
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>, type: Type) => {
    if (e.key === 'Enter') {
      onChangeRow(type)
      stopEditing(e)
    }
  }

  return (
    <form ref={refForm} className={styles.container} onDoubleClick={startEditing}>
      <div className={styles.level_container} onDoubleClick={(e) => e.stopPropagation()}>
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
              onChange={(e) => onChangeHandler(e.target.value, 'title')}
              onKeyDown={(e) => onKeyDownHandler(e, 'row')}
              placeholder='Введите название работы'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unit}
              onChange={(e) => onChangeHandler(e.target.value, 'unit')}
              onKeyDown={(e) => onKeyDownHandler(e, 'row')}
              placeholder='Л'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.quantity}
              onChange={(e) => {
                const { value } = e.target
                if (numberCheck(value)) {
                  onChangeHandler(value, 'quantity')
                }
              }}
              onKeyDown={(e) => onKeyDownHandler(e, 'row')}
              placeholder='1200'
            />
          </div>
          <div>
            <Input
              type='text'
              value={values.unitPrice}
              onChange={(e) => {
                const { value } = e.target
                if (numberCheck(value)) {
                  onChangeHandler(value, 'unitPrice')
                }
              }}
              onKeyDown={(e) => onKeyDownHandler(e, 'row')}
              placeholder='850'
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <span title={title}>{title}</span>
          </div>
          <div>{unit}</div>
          <div>{quantity}</div>
          <div>{unitPrice}</div>
        </>
      )}
      <div>{price}</div>
    </form>
  )
}
