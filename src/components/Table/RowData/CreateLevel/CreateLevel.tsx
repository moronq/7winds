import React from 'react'

import { useAppDispatch } from '@store/hooks/hook'
import { createRow } from '@store/slices/rowSlice/rowSlice'
import { createDefaultRowData } from '@utils/hooks/rows/createDefaultRowData'

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

  const onClickActionCreator = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    parent: NewRowData['parent'],
    type: NewRowData['type']
  ) => {
    e.preventDefault()
    dispatch(createRow(createDefaultRowData(parent, type)))
  }

  const addRowFirstLevel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    onClickActionCreator(e, null, 'level')

  const addRowSecondLevel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    onClickActionCreator(e, parentId || id, 'level')

  const addRowTypeRow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    onClickActionCreator(e, id, 'row')

  return (
    <>
      {type === 'level' && parent && (
        <>
          <button
            aria-label='second-level'
            onClick={(e) => e.preventDefault()}
            className={styles.second_level_icon_container}
          />
          {parent && <span className={styles.second_level_line} />}
          {!isLast && <span className={styles.second_level_sub_line} />}
          <div
            className={styles.additional_second_container}
            onDoubleClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label='second-level'
              onClick={(e) => {
                addRowSecondLevel(e)
              }}
              className={styles.second_level_additional}
            />
            <button
              aria-label='third-level'
              onClick={(e) => {
                addRowTypeRow(e)
              }}
              className={styles.third_level_additional}
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
            className={styles.first_level_icon_container}
          />
          {!isLast && <span className={styles.first_level_line} />}
          {!disabled && (
            <div className={styles.additional_container} onDoubleClick={(e) => e.stopPropagation()}>
              <button
                aria-label='first-level'
                onClick={(e) => {
                  addRowFirstLevel(e)
                }}
                className={styles.first_level_additional}
              />
              <button
                aria-label='second-level'
                onClick={(e) => {
                  addRowSecondLevel(e)
                }}
                className={styles.second_level_additional}
              />
              <button
                aria-label='third-level'
                onClick={(e) => {
                  addRowTypeRow(e)
                }}
                className={styles.third_level_additional}
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
              addRowTypeRow(e)
            }}
            className={styles.third_level_icon_container}
          />
          <span
            className={`${
              parentHasParent ? styles.third_level_line : styles.third_level_main_line
            }`}
          />
          <span
            className={`${
              parentHasParent ? styles.third_level_line_handle : styles.third_level_line_main_handle
            }`}
          />
          {parentHasParent && !isParentLast && <span className={styles.second_level_sub_line} />}
        </>
      )}
    </>
  )
}
