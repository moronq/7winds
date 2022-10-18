import React from 'react';

import { Input } from '@common/fields';

import styles from './RowData.module.css';

interface NewRowData {
  title: string; // Наименование работ
  unit: string; // Ед. изм.
  quantity: number; // Количество
  unitPrice: number; // Цена за ед.
  price: number; // Стоимость

  parent: number | null; // id уровня, в котором находится (либо null для первого уровня)
  type: 'level' | 'row';
}

interface RowDataProps extends NewRowData {
  id: number;
}

export const RowData: React.FC<RowDataProps> = ({
  title,
  unit,
  quantity,
  price = 0,
  unitPrice,
  parent,
  type,
  id
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  console.log(isEditing);

  return (
    <>
      {isEditing ? (
        <form className={styles.rowData_container}>
          <div>Уровень</div>
          <div>
            <Input type='text' onKeyDown={(e) => stopEditing(e)} />
          </div>
          <div>
            <Input type='text' onKeyDown={(e) => stopEditing(e)} />
          </div>
          <div>
            <Input type='text' onKeyDown={(e) => stopEditing(e)} />
          </div>
          <div>
            <Input type='text' onKeyDown={(e) => stopEditing(e)} />
          </div>
          <div>{price}</div>
        </form>
      ) : (
        <div aria-hidden className={styles.rowData_container} onDoubleClick={startEditing}>
          <div>Уровень</div>
          <div>{title}</div>
          <div>{unit}</div>
          <div>{quantity}</div>
          <div>{unitPrice}</div>
          <div>{price}</div>
        </div>
      )}
    </>
  );
};
