import React from 'react'

import { useAppSelector } from '@store/hooks/hook'

import { LevelTypeRowData } from './LevelTypeRowData'
import { RowTypeRowData } from './RowTypeRowData'

interface RowDataProps {}

export const RowData: React.FC<RowDataProps> = () => {
  const { rows } = useAppSelector((state) => state.rows)

  const firstLevelArr = rows.filter((el) => el.parent === null)
  const secondLevelArr = rows.filter((el) => el.parent && el.type === 'level')
  const rowsArr = rows.filter((el) => el.type === 'row')

  return (
    <>
      {firstLevelArr.map((firstLevel) => (
        <LevelTypeRowData
          parent={firstLevel.parent}
          title={firstLevel.title}
          price={firstLevel.price}
          key={firstLevel.id}
        >
          {secondLevelArr
            .filter((second) => second.parent === firstLevel.id)
            .map((secondLevel, index) => (
              <LevelTypeRowData
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
                      parentHasParent={true}
                      isParentLast={
                        index + 1 ===
                        secondLevelArr.filter((second) => second.parent === secondLevel.id).length
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
