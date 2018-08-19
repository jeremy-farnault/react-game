export const sortAttributesObject = (obj: any) => {
  const newObj: any = {}
  Object.keys(obj)
    .sort()
    .forEach((k: string) => {
      if (typeof obj[k] === 'object') {
        newObj[k] = sortAttributesObject(obj[k])
      } else {
        newObj[k] = obj[k]
      }
    })
  return newObj
}
