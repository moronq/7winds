import { createSlice } from '@reduxjs/toolkit'

interface InitialStateType {
  rows: RowData[]
}

const initialState: InitialStateType = {
  rows: [
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
  ]
}

const rowSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {}
})

export default rowSlice.reducer
