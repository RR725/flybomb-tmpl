/*
 * @Author: ecofe 
 * @Date: 2018-06-29 16:13:28 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-06-29 16:16:09
 */

'use strict'

function loading(data) {
  return {
    type: 'loading',
    data: data
  }
}
function loaded(data) {
  return {
    type: 'loaded',
    data: data
  }
}

function pagination(current) {
  return {
    type: 'pagination',
    data: current
  }
}
export default {
  loading,
  loaded,
  pagination
}
