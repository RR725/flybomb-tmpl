/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:35 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 14:37:01
 */
'use strict'
import { Map } from 'immutable'
const initialState = Map({
  breadcrumb: []
})

function update(state = initialState, action) {
  for (let i of state) {
    let value = i[0]
    if (action.type === value) {
      return state.update(value, () => action.data[value])
    }
  }
  return state
}
export default update
