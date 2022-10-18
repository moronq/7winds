import React from 'react'
import { Provider } from 'react-redux'

import { MainPage } from '@components'
import { store } from '@store/store'

import './App.css'

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
)

export default App
