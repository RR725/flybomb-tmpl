/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:56:01 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 17:39:31
 */
'use strict'
const host = ''
const restapi = {
  getLoginInfo: host + '/restapi/loginInfo',
  logout: host + '/restapi/logout',
  getMainNav: host + '/restapi/nav/main',
  getSubNav: host + '/restapi/nav/sub',
  homeList: host + '/restapi/app/list'
}
module.exports = restapi
