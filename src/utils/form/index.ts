export const dotCheck = (value: string) => {
  const arr = value.split('').filter((el) => el === '.')
  const result = arr.length <= 1
  return result
}

export const numberCheck = (value: string) =>
  (/^[0-9.]+$/g.test(value) || value === '') && dotCheck(value)
