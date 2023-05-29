export const groupBy = <T extends object>(
  myArr: Array<T>,
  groupKey: keyof T
) => {
  return myArr.reduce((obj: { [key: string]: Array<T> }, curr: T) => {
    if (!((curr[groupKey] as string) in obj)) {
      obj[curr[groupKey] as string] = []
    }
    obj[curr[groupKey] as string].push(curr)
    return obj
  }, {})
}
