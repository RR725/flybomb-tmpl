/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:55:52 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 17:49:46
 */
const initialState = {
  appId: 0
}
import home from '../js/module1/reducer'
import header from '../components/header/reducer'
import breadcrumb from '../components/breadcrumb/reducer'

function common(state = initialState, action) {
  if (action.type === 'setAppId') {
    return { appId: action.data.appId }
  }
  return state
}
export default { home, common, header,breadcrumb }
