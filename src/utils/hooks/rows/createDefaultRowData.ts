export const createDefaultRowData = (parent: number | null, type: 'level' | 'row') => ({
  parent,
  price: 0,
  quantity: 0,
  title: '',
  type,
  unit: '',
  unitPrice: 0
})
