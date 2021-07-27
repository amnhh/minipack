const nativeObjToString = Object.prototype.toString
const UNKNOWN_TYPE = 'unknown'

const _getTypeStr = v => nativeObjToString
  .call(v)
  .match(/\[object (.*)]/)
  ?.[1] ?? UNKNOWN_TYPE

const typeCheckCreator = type => v => type === _getTypeStr(v)


export const isString = typeCheckCreator('String')
export const isNull = typeCheckCreator('Null')
export const isEmptyStr = v => v === ''
