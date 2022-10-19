import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { editRow, saveChanges, saveRow } from '@utils/rows'

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
    }
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 3,
    //   parent: 2,
    //   type: 'row'
    // },
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 4,
    //   parent: 1,
    //   type: 'level'
    // },
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 5,
    //   parent: 1,
    //   type: 'level'
    // },
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 6,
    //   parent: 5,
    //   type: 'row'
    // },
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 7,
    //   parent: 1,
    //   type: 'row'
    // },
    // {
    //   title: 'lasjdkjsad',
    //   unit: 'asljdkasd',
    //   quantity: 21389,
    //   unitPrice: 213123,
    //   price: 324324,
    //   id: 8,
    //   parent: 1,
    //   type: 'row'
    // }
  ]
}

const rowSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    createRow: (state, action: PayloadAction<NewRowData>) => {
      const { changed } = saveRow(action.payload, state.rows)
      state.rows = saveChanges(changed, state.rows)
      console.log(state.rows)
    },
    changeRow: (state, action: PayloadAction<RowData>) => {
      const { changed } = editRow(action.payload, state.rows)
      state.rows = saveChanges(changed, state.rows)
    }
  }
})

export default rowSlice.reducer
export const { createRow, changeRow } = rowSlice.actions
