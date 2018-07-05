/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:55 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-05 09:10:20
 */
'use strict'
import React from 'react'
import { message } from 'antd'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import utils from '../../lib/utils'
import mockData from '../../mock/mock'
if (utils.mock) {
  const mock = new MockAdapter(axios)
  mockData(mock)
 
}
// refetch.setDefaultOptions({
//   dataType: 'json'
// })
// axios.interceptors.request.use(
//   function(request) {
//     //something
//     return request
//   },
//   function(error) {
//     return Promise.reject(error)
//   }
// )
// axios.interceptors.response.use(
//   function(response) {
//     //something
//     return response
//   },
//   function(error) {
//     return Promise.reject(error)
//   }
// )
const ajax = {
  get(url, options) {
    let self = this
    console.log(url)
    return axios
      .get(url, options)
      .then(function(result) {
        result = result.data
        // console.log(utils)
        // if (utils.mock) {
        //   let data = mockData(url)
        //   for (let i in data) {
        //     if (url.indexOf(i) > -1) {
        //       result = data[i]
        //     }
        //   }
        // }

        if (result.code === '301') {
          top.window.location.href = result.value
          return result
        }
        if (result.code === '200') {
          return result
        } else {
          message.error(result.message, 2000)
          setTimeout(function() {
            message.destroy()
          }, 2000)

          return result
        }
      })

      .catch(function(error) {
        console.log(error)
      })
  },

  commonCallback(result, callback, errorCallback) {
    result = result.data
    if (result.code === '301') {
      top.window.location.href = result.value
      return
    }
    if (
      result.code === '200' ||
      typeof result === 'string' ||
      result.code === '110051'
    ) {
      //110051是上传文件失败的错误码。需要放行到业务代码里去处理一些逻辑，比如失败后删掉上传时显示在页面里的文件名
      callback && callback(result)
    } else {
      message.error(result.message, 2000)
      setTimeout(function() {
        message.destroy()
      }, 2000)
      errorCallback && errorCallback(result)
      return
    }
  },
  post: function(url, data, callback, errorCallback) {
    let self = this

    axios
      .post(url, data)
      .then(function(result, xhr) {
        self.commonCallback(result, callback, errorCallback)
      })
      .catch(function(error, response, xhr) {
        consle.log('接口请求失败')
      })
  }
}

module.exports = ajax
