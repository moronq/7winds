import React from 'react';

import { RowData } from './RowData';

import styles from './Table.module.css';

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
    <RowData
      id={1}
      parent={1}
      price={12}
      quantity={1}
      title='first work'
      type='level'
      unit='sfdgf'
      unitPrice={123123}
    />
  </main>
);
