import React from 'react'

import { useAppSelector } from '@store/hooks/hook'

import { LevelTypeRowData } from './LevelTypeRowData'
import { RowTypeRowData } from './RowTypeRowData'

export const RowData: React.FC = () => {
  const { rows } = useAppSelector((state) => state.rows)

  const firstLevelArr = React.useMemo(
    () => rows.filter((el) => el.parent === null).sort((a, b) => a.id - b.id),
    [rows]
  )

  const secondLevelArr = React.useMemo(
    () => rows.filter((el) => el.parent && el.type === 'level'),
    [rows]
  )

  const rowsArr = React.useMemo(() => rows.filter((el) => el.type === 'row'), [rows])

  return (
    <>
      {firstLevelArr.map((firstLevel) => (
        <LevelTypeRowData
          parentId={null}
          id={firstLevel.id}
          parent={firstLevel.parent}
          title={firstLevel.title}
          price={firstLevel.price}
          key={firstLevel.id}
          isLast={
            !secondLevelArr.filter((el) => el.parent === firstLevel.id).length &&
            !rowsArr.filter((el) => el.parent === firstLevel.id).length
          }
        >
          {secondLevelArr
            .filter((second) => second.parent === firstLevel.id)
            .map((secondLevel, index) => (
              <LevelTypeRowData
                parentId={firstLevel.id}
                id={secondLevel.id}
                parent={secondLevel.parent}
                price={secondLevel.price}
                title={secondLevel.title}
                isLast={
                  index + 1 ===
                    secondLevelArr.filter((second) => second.parent === firstLevel.id).length &&
                  rowsArr.filter((rowsFilter) => rowsFilter.parent === firstLevel.id).length === 0
                }
                key={secondLevel.id}
              >
                {rowsArr
                  .filter((rowsFilter) => rowsFilter.parent === secondLevel.id)
                  .map((rows) => (
                    <RowTypeRowData
                      parent={secondLevel.id}
                      parentId={secondLevel.id}
                      id={rows.id}
                      parentHasParent={true}
                      isParentLast={
                        index + 1 ===
                          secondLevelArr.filter((second) => second.parent === firstLevel.id)
                            .length &&
                        rowsArr.filter((rowsFilter) => rowsFilter.parent === firstLevel.id)
                          .length === 0
                      }
                      price={rows.price}
                      quantity={rows.quantity}
                      title={rows.title}
                      unit={rows.unit}
                      unitPrice={rows.unitPrice}
                      key={rows.id}
                    />
                  ))}
              </LevelTypeRowData>
            ))}
          {rowsArr
            .filter((rowsFilter) => rowsFilter.parent === firstLevel.id)
            .map((rows) => (
              <RowTypeRowData
                parent={firstLevel.id}
                parentId={null}
                id={rows.id}
                parentHasParent={false}
                isParentLast={true}
                price={rows.price}
                quantity={rows.quantity}
                title={rows.title}
                unit={rows.unit}
                unitPrice={rows.unitPrice}
                key={rows.id}
              />
            ))}
        </LevelTypeRowData>
      ))}
    </>
  )
}
