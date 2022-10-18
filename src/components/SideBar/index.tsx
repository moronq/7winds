import React from 'react';

import styles from './SideBar.module.css';

const projects = [
  'По проекту',
  'Объекты',
  'РД',
  'МТО',
  'СМР',
  'График',
  'МиМ',
  'Рабочие',
  'Капвложения',
  'Бюджет',
  'Финансирование',
  'Панорамы',
  'Камеры',
  'Поручения',
  'Контрагенты'
];

export const SideBar = () => (
  <aside className={styles.sidebar_container}>
    <ul className={styles.sidebar_list_container}>
      {projects.map((el) => (
        <li key={el} className={styles.sidebar_item_container}>
          <div className={styles.sidebar_item_icon_container} />
          <span title={el} className={styles.sidebar_item_text}>
            {el}
          </span>
        </li>
      ))}
    </ul>
  </aside>
);
