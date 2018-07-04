/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:35 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 11:33:11
 */
'use strict'
import { Map } from 'immutable'
const initialState = Map({
  loginInfo: {},
  permission: {},
  listApp: []
})

function update(state = initialState, action) {
  if (action.type === 'getAjaxDatas') {
    return state.update(() => Map(action.data))
  } else {
    return state
  }
}
export default update
