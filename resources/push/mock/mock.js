/*
 * @Author: ecofe 
 * @Date: 2018-06-29 16:37:49 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 08:59:55
 */

'use strict'
import mockDatas from './data'
import utils from '../lib/utils'
function getData(mock) {
  mockDatas.map(options => {
    let url = options.params
      ? utils.makeUrl(options.url, options.params)
      : options.url
    mock.onGet(url).reply(200, options.data)
  })
}

export default getData
