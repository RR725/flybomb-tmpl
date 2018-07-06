/*
 * @Author: ecofe 
 * @Date: 2018-06-29 16:13:28 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 17:48:15
 */

'use strict'

function getLoginInfo(data) {
  return {
    type: 'loginInfo',
    data: data
  }
}
function getMainNav(data) {
  return {
    type: 'mainNav',
    data: data
  }
}
function getSubNav(data) {
  return {
    type: 'subNav',
    data: data
  }
}
function getSubNavCurrentId(data) {
  return {
    type: 'currentId',
    data: data
  }
}
function getCurrentNav(data) {
  return {
    type: 'currentNav',
    data: data
  }
}
function getCurrentNavId(data) {
  return {
    type: 'currentNavId',
    data: data
  }
}

export default {
  getMainNav,
  getSubNav,
  getCurrentNav,
  getLoginInfo,
  getCurrentNavId,
  getSubNavCurrentId
}
