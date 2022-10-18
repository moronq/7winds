import React from 'react';

import { Input } from '@common/fields';

import styles from '../RowData.module.scss';

interface LevelTypeRowDataProps extends Pick<RowData, 'title' | 'parent' | 'price'> {
  children?: React.ReactNode;
  isLast?: boolean;
}

export const LevelTypeRowData: React.FC<LevelTypeRowDataProps> = ({
  title,
  parent,
  price,
  children = true,
  isLast = false
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  console.log(isLast);

  return (
    <>
      <form className={styles.rowData_container} onDoubleClick={startEditing}>
        <div className={styles.rowData_level_container} onDoubleClick={(e) => e.stopPropagation()}>
          {parent ? (
            <>
              <button
                aria-label='second-level'
                onClick={(e) => e.preventDefault()}
                className={styles.rowData_second_level_icon_container}
              />
              {parent && <span className={styles.rowData_second_level_line} />}
              {!isLast && <span className={styles.rowData_second_level_sub_line} />}
            </>
          ) : (
            <>
              <button
                aria-label='first-level'
                onClick={(e) => e.preventDefault()}
                className={styles.rowData_first_level_icon_container}
              />
              {children && <span className={styles.rowData_first_level_line} />}
            </>
          )}
        </div>
        {isEditing ? (
          <>
            <div>
              <Input type='text' onKeyDown={(e) => stopEditing(e)} />
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
  );
};
