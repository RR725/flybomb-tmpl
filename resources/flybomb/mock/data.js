/*
 * @Author: ecofe 
 * @Date: 2018-07-09 16:17:11 
 * @Last Modified by:   ecofe 
 * @Last Modified time: 2018-07-09 16:17:11 
 */
'use strict'
import Mock from 'mockjs'
let mockData = []
const mainNavNum = 4
function MockTable(url, name) {
  let total = 124
  let pageNum = Math.ceil(total / 10)
  let arr = []
  for (let i = 0; i < pageNum; i++) {
    arr.push(
      Mock.mock({
        params: {
          appId: 0,
          index: 1 + i
        },
        url: url,
        data: {
          code: '200',
          message: '',
          redirect: '',
          value: {
            amount: 30,
            index: 1,
            'result|10': [
              {
                'allNum|+1': 54 * i,
                'appId|+1': 21 * i,
                appName: function(evt) {
                  return name + evt.context.currentContext.appId
                },
                'appType|+1': 0,
                'onlineNum|+1': 100 * i,
                packageName: function(evt) {
                  return 'com.package.test' + evt.context.currentContext.appId
                },
                'pushAppId+1': 11364 * i
              }
            ]
          }
        }
      })
    )
  }
  return arr
}
function MockMainNav() {
  return Mock.mock({
    url: '/restapi/nav/main',
    data: {
      code: '200',
      message: '',
      redirect: '',
      ['value|' + mainNavNum]: [
        {
          'id|+1': 1,
          name: function(evt) {
            return '模块' + evt.context.currentContext.id
          },
          pageUrl: function(evt) {
            return '/module' + evt.context.currentContext.id
          }
        }
      ]
    }
  })
}
function MockSubNav() {
  let arr = []
  for (let i = 1; i < mainNavNum + 1; i++) {
    let source = Mock.mock({
      params: { id: i },
      url: '/restapi/nav/sub',
      data: {
        code: '200',
        message: '',
        redirect: '',
        'value|1-4': [
          {
            'id|+1': 100,
            name: function(evt) {
              return '子模块' + evt.context.currentContext.id * i
            },
            pageUrl: function(evt) {
              return '/module' + i + '/menu' + evt.context.currentContext.id * i
            },
            children: function(evt) {
              let arr = [10, 20, 30]
              return arr.map(data => {
                let id = data * evt.context.currentContext.id * i
                return {
                  id: id,
                  name: '孙模块' + id,
                  pageUrl:
                    '/module' +
                    i +
                    '/menu' +
                    evt.context.currentContext.id * i +
                    '/sub' +
                    id
                }
              })
            }
          }
        ]
      }
    })
    arr.push(source)
  }
  return arr
}
mockData.push(MockMainNav())
mockData = mockData.concat(MockSubNav())
mockData = mockData.concat(MockTable('/restapi/app/list', '应用'))
mockData.push({
  url: '/restapi/loginInfo',
  data: {
    code: '200',
    message: '',
    redirect: '',
    value: {
      icon:
        'http://img.res.meizu.com/img/download/uc/11/35/35/86/70/113535867/w200h200?t=1509952107000',
      userTypes: [2],
      userId: 2221,
      username: 'ecofe'
    }
  }
})
module.exports = mockData
