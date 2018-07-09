/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:35 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 17:57:04
 */
'use strict'
import { Map } from 'immutable'
const initialState = Map({
  loginInfo: {},//登录信息
  mainNav: [],//主导航列表
  subNav: [],//二级导航列表
  currentNav: '',//当前的主导航
  currentNavId: '',//当前的主导航ID
  currentId:'',//最后一级的侧边栏
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
