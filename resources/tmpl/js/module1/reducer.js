/*
 * @Author: ecofe
 * @Date: 2018-06-29 15:54:35
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 10:08:13
 */
'use strict'
import { Map } from 'immutable'
const initialState = Map({
  current: 1,
  loading: false, //ajax完成状态
  data: [], //表格数据
  pagination: null //表格分页
})

function update(state = initialState, action) {
  if (action.type === 'loading') {
    let newState = state.update('loading', () => action.data.loading)
    return newState
  } else if (action.type === 'loaded') {
    return state.update(() => Map(action.data))
  } else if (action.type === 'pagination') {
    return state.update('current', () => action.data.current)
  } else {
    return state
  }
}
export default update
