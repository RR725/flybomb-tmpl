/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:55 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-09 17:15:26
 */
'use strict'
import React from 'react'
import { message } from 'antd'
import axios from 'axios'
import utils from '../../lib/utils'

//mock假数据
import MockAdapter from 'axios-mock-adapter'
import mockData from '../../mock/mock'
const mock = new MockAdapter(axios)
mockData(mock)
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
    return axios
      .get(url, options)
      .then(result => {
        return this.commonCallback(result)
      })

      .catch(function(error) {
        console.log(error)
      })
  },

  commonCallback(result) {
    result = result.data
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
  },
  post: function(url, options) {
    let self = this

    axios
      .post(url, options)
      .then(function(result) {
        return this.commonCallback(result)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}

module.exports = ajax
