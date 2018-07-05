/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:55:10 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-05 15:51:30
 */
'use strict'
import React from 'react'
import { Form, Select, Button, Row, Icon, Col } from 'antd'
const Option = Select.Option
const FormItem = Form.Item
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import Table from './table'
import ajax from '../../components/ajax'

import { Link } from 'react-router-dom'
let _currentApp = {}

class HomeToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appId: 0
    }
  }

  async tableData(searchParam) {
    //表格需要的数据
    const self = this
    this.props.loading({
      loading: true
    })

    let url = restapi.homeList
    url = utils.makeUrl(url, searchParam)
    let result = await ajax.get(url)
    let data = result.value.result
    console.log(result)
    data.map(function(json, key) {
      data[key]['key'] = key
    })
    // self.props.updateAppId({
    //   appId: 3
    // })
    self.props.loaded({
      current: searchParam.index,
      data: data,
      loading: false,
      pagination: {
        // showQuickJumper:true,
        total: result.value.amount,
        current: searchParam.index,
        pageSize: 10,
        showSizeChanger: false,
        onChange(current) {
          let searchParam = {
            appId: 0,
            name: '',
            index: current
          }

          self.props.pagination(current)
          self.tableData(searchParam)
        }
      }
    })
  }
  componentDidMount() {
    const hash = window.location.hash
    let searchParam = {
      appId: 0,
      index: this.props.home.get('current')
    }

    searchParam.index = 1
    this.tableData(searchParam)
  }

  render() {
    const loginInfo = this.props.header.get('loginInfo')
    const { userTypes } = loginInfo
    const userAuth = userTypes && userTypes[0]
    return (
      <div>
        <Form horizontal="true">
          <div className="mg10 ta_r">
            {userAuth > 0 ? (
              <Link to={'/home/add-app'}>
                <Button type="primary" size="large">
                  <Icon
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}
                    type="plus"
                  />新建应用
                </Button>{' '}
              </Link>
            ) : null}
          </div>
        </Form>

        <Table {...this.props} />
      </div>
    )
  }
}

HomeToolbar = Form.create()(HomeToolbar)
module.exports = HomeToolbar
