function recalculation(parentID: number | null, storage: RowData[]) {
  const rows = [...storage]
  const changedRows: RowData[] = []

  if (parentID == null) return changedRows
  let currentParentIndex = rows.findIndex((v) => v.id === parentID)
  if (currentParentIndex === -1) return changedRows

  do {
    const currentParent = rows[currentParentIndex]
    const children = rows.filter((v) => v.parent === currentParent.id)
    const newPrice = children.reduce((acc, v) => acc + v.price, 0)

    if (currentParent.price !== newPrice) {
      rows[currentParentIndex].price = newPrice
      changedRows.push(rows[currentParentIndex])

      currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent)
      continue
    }

    break
  } while (currentParentIndex !== -1)

  return changedRows
}

// функция для сохранения строки
export function saveRow(rowData: NewRowData, storage: RowData[]) {
  const index = Math.max(...storage.map((v) => v.id), 0) + 1
  const row: RowData = { id: index, ...rowData }

  storage.push(row)
  return {
    current: row,
    changed: recalculation(row.parent, storage)
  }
}

// функция для изменения строки
export function editRow(row: RowData, storage: RowData[]) {
  const index = storage.findIndex((v) => v.id === row.id)
  storage.splice(index, 1, row)

  return {
    current: row,
    changed: recalculation(row.parent, storage)
  }
}
