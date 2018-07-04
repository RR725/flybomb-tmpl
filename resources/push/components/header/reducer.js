/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:35 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 14:52:28
 */
'use strict'
import { Map } from 'immutable'
const initialState = Map({
  loginInfo: {},
  permission: {},
  listApp: [],
  currentNav: ''
})

function update(state = initialState, action) {
  if (action.type === 'getAjaxDatas') {
    return state.update(() => Map(action.data))
  } else if (action.type === 'getCurrentNav') {
    return state.update('currentNav', () => action.data.currentNav)
  } else {
    return state
  }
}
export default update
