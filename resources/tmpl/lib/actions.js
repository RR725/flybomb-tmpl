/*
 * @Author: ecofe 
 * @Date: 2018-06-29 16:37:49 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 08:52:56
 */

'use strict'

function updateAppId(data) {
  return {
    type: 'setAppId',
    data: data
  }
}

export default {
  updateAppId
}
