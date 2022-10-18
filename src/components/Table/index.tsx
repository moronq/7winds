import React from 'react';

import { LevelTypeRowData } from './RowData/LevelTypeRowData';
import { RowTypeRowData } from './RowData/RowTypeRowData';

import styles from './Table.module.css';

const lines: RowData[] = [
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 1,
    parent: null,
    type: 'level'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 2,
    parent: 1,
    type: 'level'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 3,
    parent: 2,
    type: 'row'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 4,
    parent: 1,
    type: 'level'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 5,
    parent: 1,
    type: 'level'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 6,
    parent: 5,
    type: 'row'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 7,
    parent: 1,
    type: 'row'
  },
  {
    title: 'lasjdkjsad',
    unit: 'asljdkasd',
    quantity: 21389,
    unitPrice: 213123,
    price: 324324,
    id: 8,
    parent: 1,
    type: 'row'
  }
];

const firstLevelArr = lines.filter((el) => el.parent === null);
const secondLevelArr = lines.filter((el) => el.parent && el.type === 'level');
const rowsArr = lines.filter((el) => el.type === 'row');

console.log(secondLevelArr);

export const Table = () => (
  <main className={styles.table_container}>
    <div className={styles.table_title_row_container}>
      <div>Уровень</div>
      <div>Наименование работ</div>
      <div>Ед. изм.</div>
      <div>Количество</div>
      <div>Цена за ед.</div>
      <div>Стоимость</div>
    </div>
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
  </main>
);
