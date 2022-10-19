import React from 'react'

import avatar from '../../static/images/avatar.jpg'

import styles from './Header.module.css'

export const Header: React.FC = () => (
  <header className={styles.header_container}>
    <div className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_left_panel_container}>
          <button aria-label='tiles' className={styles.navbar_tiles_container} />
          <button aria-label='back' className={styles.navbar_back_arrow_container} />
          <div className={styles.navbar_preview}>
            Просмотр <span className={styles.navbar_underline} />
          </div>
          <div className={styles.navbar_control}>Управление</div>
        </div>
        <div className={styles.user_panel_container}>
          <div className={styles.user_avatar_container}>
            <img src={avatar} alt='user-avatar' />
          </div>
          <div>Антон Петров</div>
          <button aria-label='options' className={styles.user_options_container} />
        </div>
      </nav>
    </div>
    <div className={styles.title_row_container}>
      <div className={styles.title_list_container}>
        <div className={styles.title_list_text}>
          <span>Название проекта</span>
          <span className={styles.title_abbreviation}>Аббревиатура</span>
        </div>
        <button aria-label='options' className={styles.user_options_container} />
      </div>
      <div className={styles.title_container}>Строительно-монтажные работы</div>
    </div>
  </header>
)
