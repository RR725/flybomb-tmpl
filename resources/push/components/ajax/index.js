/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:55 
 * @Last Modified by:   ecofe 
 * @Last Modified time: 2018-07-02 09:15:55 
 */
'use strict'
import React from 'react'
import { message } from 'antd'
import refetch from 'refetch'
refetch.setDefaultOptions({
  dataType: 'json'
})

const ajax = {
  get: function(url, callback, errorCallback, options) {
    let self = this
    refetch
      .get(url, {}, options)
      .then(function(result, xhr) {
        self.commonCallback(result, callback, errorCallback)
      })
      .catch(function(error, response, xhr) {
        consle.log('接口请求失败')
      })
  },

  commonCallback(result, callback, errorCallback) {
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

    refetch
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
