import React from 'react';

import { Input } from '@common/fields';

import styles from '../RowData.module.scss';

interface RowTypeRowDataProps extends Omit<RowData, 'id' | 'parent' | 'type'> {
  parentHasParent: boolean;
  isParentLast: boolean;
}

export const RowTypeRowData: React.FC<RowTypeRowDataProps> = ({
  title,
  price,
  quantity,
  unit,
  unitPrice,
  parentHasParent,
  isParentLast = true
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  return (
    <form className={styles.rowData_container} onDoubleClick={startEditing}>
      <div className={styles.rowData_level_container} onDoubleClick={(e) => e.stopPropagation()}>
        <button
          aria-label='third-level'
          onClick={(e) => e.preventDefault()}
          className={styles.rowData_third_level_icon_container}
        />
        <span
          className={`${
            parentHasParent ? styles.rowData_third_level_line : styles.rowData_third_level_main_line
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
      </div>
      {isEditing ? (
        <>
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
  );
};
