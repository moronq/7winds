import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { editRow, saveChanges, saveRow } from '@utils/rows'

interface InitialStateType {
  rows: RowData[]
}

const initialState: InitialStateType = {
  rows: [
    {
      title: '',
      unit: '',
      quantity: 0,
      unitPrice: 0,
      price: 0,
      id: 1,
      parent: null,
      type: 'level'
    }
  ]
}

const rowSlice = createSlice({
  name: 'rows',
  initialState,
  reducers: {
    createRow: (state, action: PayloadAction<NewRowData>) => {
      const { changed } = saveRow(action.payload, state.rows)
      state.rows = saveChanges(changed, state.rows)
    },
    changeRow: (state, action: PayloadAction<RowData>) => {
      const { changed } = editRow(action.payload, state.rows)
      state.rows = saveChanges(changed, state.rows)
    }
  }
})

export default rowSlice.reducer
export const { createRow, changeRow } = rowSlice.actions
