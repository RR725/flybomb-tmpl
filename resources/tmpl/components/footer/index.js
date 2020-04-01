/*
 * @Author: ecofe
 * @Date: 2018-07-02 09:15:24
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-05 17:53:07
 */
'use strict'
import React from 'react'
import './index.less'
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const year = new Date().getFullYear()

    return (
      <div className="footer">
        ©{year}{' '}
        <a href="http://beian.miit.gov.cn/" target="_blank">
          粤ICP备15059307号
        </a>
      </div>
    )
  }
}

module.exports = Footer
