export const groupBy = (myArr: Array<object>, groupKey: string) => {
  return myArr.reduce((obj, curr) => {
    if (!(curr[groupKey] in obj)) {
      obj[curr[groupKey]] = []
    }
    obj[curr[groupKey]].push(curr)
    return obj
  }, {})
}
