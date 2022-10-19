export const dotCheck = (value: string) => {
  const arr = value.split('').filter((el) => el === '.')
  const result = arr.length <= 1
  return result
}
