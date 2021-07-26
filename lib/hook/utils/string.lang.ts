
const _batchStrCreator = (connector) => (strList: string[]) => strList.join(connector)

export const batchStrWithEnter = _batchStrCreator('\n')
