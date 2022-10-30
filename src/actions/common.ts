import { CommonReducerType } from 'reducers/common'

export const setCommonData = (data: CommonReducerType) => ({
  type: 'COMMON_SET_DATA',
  data
})

export const setCommonInit = () => ({
  type: 'COMMON_INIT'
})
