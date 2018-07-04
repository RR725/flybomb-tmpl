/*
 * @Author: ecofe 
 * @Date: 2018-06-29 16:13:28 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 14:53:14
 */

'use strict'

function getAjaxDatas(data) {
  return {
    type: 'getAjaxDatas',
    data: data
  }
}
function getCurrentNav(data) {
  return {
    type: 'getCurrentNav',
    data: data
  }
}

export default {
  getAjaxDatas,getCurrentNav
}
