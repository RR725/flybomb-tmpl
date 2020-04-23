/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:55:03 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-11 17:35:15
 */
'use strict'
import React from 'react'



import { Table } from 'antd'
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import ajax from '../../components/ajax'
class HomeTable extends React.Component {
  constructor(props) {
    super(props)
   
  }
  columns() {
    const self = this
    return [
      {
        title: '应用名称',
        key: '0',
        dataIndex: 'appName'
      },
      {
        title: '应用包名',
        className: 'td_appname',
        key: '1',
        dataIndex: 'packageName'
      },
      {
        title: 'AppID',
        key: '2',
        dataIndex: 'pushAppId'
      },
      {
        title: '在线用户数',
        align:'right',
        key: '3',
        dataIndex: 'onlineNum'
      },
      {
        title: '累计用户数',
        align:'right',
        key: '4',
        dataIndex: 'allNum'
      },
      {
        title: '操作',
        key: '5',
        render(text, record) {
          return (
            <div className="btn_wrap">
              <a
                title="打开应用"
                onClick={() => self.openApp(record)}
                to="javascript:;"
              >
                打开应用
              </a>
            </div>
          )
        },
        dataIndex: ''
      }
    ]
  }
  openApp(record) {
  
  }
  render() {
    const columns = this.columns()
    return (
      <Table
        className="home_table"
        columns={columns}
        loading={this.props.home.get('loading')}
        dataSource={this.props.home.get('data')}
        pagination={this.props.home.get('pagination')}
      />
    )
  }
}
module.exports = HomeTable
