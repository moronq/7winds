import React from 'react'

import { Input } from '@common/fields'
import { useAppDispatch } from '@store/hooks/hook'
import { changeRow } from '@store/slices/rowSlice/rowSlice'
import { useRow } from '@utils/hooks'

import { CreateLevel } from '../CreateLevel/CreateLevel'

import styles from '../RowData.module.scss'

interface LevelTypeRowDataProps extends Pick<RowData, 'title' | 'parent' | 'price' | 'id'> {
  children?: React.ReactNode
  isLast?: boolean
  parentId: number | null
}

export const LevelTypeRowData: React.FC<LevelTypeRowDataProps> = ({
  title,
  parent,
  price,
  children = true,
  isLast = false,
  id,
  parentId
}) => {
  const { ref, refForm, isEditing, values, startEditing, onChangeHandler, stopEditing } = useRow<{
    title: string
  }>({
    title: ''
  })

  const dispatch = useAppDispatch()

  const onChangeRow = (type: 'level' | 'row') => {
    dispatch(
      changeRow({
        title: values.title,
        id,
        parent,
        price,
        quantity: 0,
        type,
        unit: '',
        unitPrice: 0
      })
    )
  }

  return (
    <>
      <form ref={refForm} className={styles.rowData_container} onDoubleClick={startEditing}>
        <div className={styles.rowData_level_container} onDoubleClick={(e) => e.stopPropagation()}>
          <CreateLevel
            type='level'
            parent={!!parent}
            isLast={isLast}
            id={id}
            parentId={parentId}
            disabled={isEditing}
          />
        </div>
        {isEditing ? (
          <>
            <div>
              <Input
                inputRef={ref}
                value={values.title}
                onChange={(e) => onChangeHandler(e, 'title')}
                type='text'
                onKeyDown={(e) => {
                  onChangeRow('level')
                  stopEditing(e)
                }}
              />
            </div>
            <div />
            <div />
            <div />
          </>
        ) : (
          <>
            <div>{title}</div>
            <div />
            <div />
            <div />
          </>
        )}

        <div>{price}</div>
      </form>
      {children}
    </>
  )
}
