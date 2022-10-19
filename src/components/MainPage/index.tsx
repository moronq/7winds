import React from 'react'

import { Header, SideBar, Table } from '@components'

import styles from './MainPage.module.css'

export const MainPage: React.FC = () => (
  <div className={styles.app_container}>
    <Header />
    <div className={styles.content}>
      <div className={styles.app_sidebar}>
        <SideBar />
      </div>
      <div className={styles.app_main}>
        <Table />
      </div>
    </div>
  </div>
)
