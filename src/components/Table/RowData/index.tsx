import React from 'react';

import { Input } from '@common/fields';

import styles from './RowData.module.scss';

interface RowDataProps extends NewRowData {}

export const RowData: React.FC<RowDataProps> = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  console.log(isEditing);

  return (
    <form className={styles.rowData_container} onDoubleClick={startEditing}>
      {/* <div className={styles.rowData_level_container} onDoubleClick={(e) => e.stopPropagation()}>
        {!parent && (
          <>
            <button
              aria-label='first-level'
              onClick={(e) => e.preventDefault()}
              className={styles.rowData_first_level_icon_container}
            />
            <span className={styles.rowData_first_level_line} />
          </>
        )}
        {parent && type === 'level' && (
          <>
            <button
              aria-label='second-level'
              onClick={(e) => e.preventDefault()}
              className={styles.rowData_second_level_icon_container}
            />
            {sub?.length && <span className={styles.rowData_second_level_line} />}
            {last || <span className={styles.rowData_second_level_sub_line} />}
          </>
        )}
        {parent && type === 'row' && (
          <>
            <button
              aria-label='third-level'
              onClick={(e) => e.preventDefault()}
              className={styles.rowData_third_level_icon_container}
            />
            {!last && <span className={styles.rowData_third_level_line} />}
            {subLine && <span className={styles.rowData_second_level_sub_line} />}
          </>
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
          {type === 'row' ? (
            <>
              <div>{title}</div>
              <div>{unit}</div>
              <div>{quantity}</div>
              <div>{unitPrice}</div>
            </>
          ) : (
            <>
              <div />
              <div />
              <div />
              <div />
            </>
          )}
        </>
      )}

      <div>{price}</div> */}
    </form>
  );
};
