import React from 'react'

import { useAppDispatch } from '@store/hooks/hook'
import { changeRow, createRow } from '@store/slices/rowSlice/rowSlice'

import styles from './CreateLevel.module.scss'

interface CreateLevelProps extends Pick<RowData, 'type' | 'id'> {
  isLast?: boolean
  parentHasParent?: boolean
  isParentLast?: boolean
  parent: boolean
  parentId: number | null
  disabled?: boolean
}

export const CreateLevel: React.FC<CreateLevelProps> = ({
  parent,
  type,
  isLast,
  parentHasParent,
  isParentLast,
  id,
  disabled,
  parentId
}) => {
  const dispatch = useAppDispatch()
  const addRowFirstLevel = () => {
    dispatch(
      createRow({
        parent: null,
        price: 0,
        quantity: 0,
        title: '',
        type: 'level',
        unit: '',
        unitPrice: 0
      })
    )
  }

  const addRowSecondLevel = () => {
    dispatch(
      createRow({
        parent: parentId || id,
        price: 0,
        quantity: 0,
        title: '',
        type: 'level',
        unit: '',
        unitPrice: 0
      })
    )
  }
  const addRowTypeRow = () => {
    dispatch(
      createRow({
        parent: id,
        price: 0,
        quantity: 0,
        title: '',
        type: 'row',
        unit: '',
        unitPrice: 0
      })
    )
  }

  return (
    <>
      {type === 'level' && parent && (
        <>
          <button
            aria-label='second-level'
            onClick={(e) => e.preventDefault()}
            className={styles.rowData_second_level_icon_container}
          />
          {parent && <span className={styles.rowData_second_level_line} />}
          {!isLast && <span className={styles.rowData_second_level_sub_line} />}
          <div className={styles.rowData_additional_second_container}>
            <button
              aria-label='second-level'
              onClick={(e) => {
                e.preventDefault()
                addRowSecondLevel()
              }}
              className={styles.rowData_second_level_additional}
            />
            <button
              aria-label='third-level'
              onClick={(e) => {
                e.preventDefault()
                addRowTypeRow()
              }}
              className={styles.rowData_third_level_additional}
            />
          </div>
        </>
      )}
      {type === 'level' && !parent && (
        <>
          <button
            aria-label='first-level'
            onClick={(e) => {
              e.preventDefault()
            }}
            className={styles.rowData_first_level_icon_container}
          />
          {!isLast && <span className={styles.rowData_first_level_line} />}
          {!disabled && (
            <div className={styles.rowData_additional_container}>
              <button
                aria-label='first-level'
                onClick={(e) => {
                  e.preventDefault()
                  addRowFirstLevel()
                }}
                className={styles.rowData_first_level_additional}
              />
              <button
                aria-label='second-level'
                onClick={(e) => {
                  e.preventDefault()
                  addRowSecondLevel()
                }}
                className={styles.rowData_second_level_additional}
              />
              <button
                aria-label='third-level'
                onClick={(e) => {
                  e.preventDefault()
                  addRowTypeRow()
                }}
                className={styles.rowData_third_level_additional}
              />
            </div>
          )}
        </>
      )}
      {type === 'row' && (
        <>
          <button
            aria-label='third-level'
            onClick={(e) => {
              e.preventDefault()
              addRowTypeRow()
            }}
            className={styles.rowData_third_level_icon_container}
          />
          <span
            className={`${
              parentHasParent
                ? styles.rowData_third_level_line
                : styles.rowData_third_level_main_line
            }`}
          />
          <span
            className={`${
              parentHasParent
                ? styles.rowData_third_level_line_handle
                : styles.rowData_third_level_line_main_handle
            }`}
          />
          {parentHasParent && !isParentLast && (
            <span className={styles.rowData_second_level_sub_line} />
          )}
        </>
      )}
    </>
  )
}
