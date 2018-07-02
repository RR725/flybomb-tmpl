/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:55:10 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-02 09:13:53
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

let _currentApp = {}

class HomeToolbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      searchStatus: false,
      appName: '全部应用',
      appId: 0
    }
  }

  tableData(searchParam) {
    //表格需要的数据
    const self = this
    this.props.loading({
      tableData: {
        loading: true
      }
    })

    let url = restapi.homeList
    url = utils.makeUrl(url, searchParam)
    ajax.get(url, function(result) {
      let data = result.value.result
      data.map(function(json, key) {
        data[key]['key'] = key
      })
      self.props.updateAppId({
        appId: 3
      })
      self.props.loaded({
        current: searchParam.index,
        tableData: {
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
        }
      })
    })
  }
  handleSearch() {
    this.setState({
      searchStatus: !this.state.searchStatus
    })
  }
  selectType(value, name) {
    const searchType = this.state.searchType
    this.props.form.setFieldsValue({
      appId: value
    })
    this.setState({
      appId: value,
      appName: name
    })
    if (value != 0) {
      _currentApp.current = 1
    }
    let searchParam = {
      // appId: value || 0,
      index: this.props.current
    }
    if (typeof value === 'number') {
      //按包名搜的时候，如果包名和应用名称相同，value的值要取name
      value = name
    }
    searchParam[searchType || 'appId'] = value || 0
    this.tableData(searchParam)
  }
  componentDidMount() {
    const hash = window.location.hash
    let searchParam = {
      appId: 0,
      index: this.props.current
    }

    searchParam.index = 1
    this.tableData(searchParam)
  }
  addApp(url) {
    _currentApp.appId = this.state.appId
    let hash = window.location.hash
    const obj = {
      type: 'back'
    }

    _currentApp.current =
      _currentApp.current > 1 ? _currentApp.current : this.props.current

    hash = utils.makeUrl(hash.split('?')[0], obj)
    window.location.hash = hash
    window.location.hash = url
  }
  changeType(value) {
    this.setState({
      searchType: value
    })
  }
  render() {
    const androidInitData = {
      api: restapi.listUserApp,
      width: '190',
      all: '全部应用',
      appName: this.state.appName,
      name: 'appId',
      appId: this.state.appId
    }

    const userAuth =
      document.getElementById('userAuth') &&
      document.getElementById('userAuth').innerHTML //在main.js里设置值
    return (
      <div>
        <Form horizontal="true">
          <div className="home_toolbar">
            <Row>
              <Col span="4">
                <div className="title">
                  <span className="border" />应用列表
                </div>
              </Col>
              <Col span="10">&nbsp;</Col>
              <Col span="10">
                <div style={{ textAlign: 'right' }}>
                  <Col span="3">&nbsp;</Col>
                  <Col span="21">
                    {userAuth > 0 ? (
                      <Button
                        onClick={this.addApp.bind(this, '/home/add-app')}
                        type="primary"
                        size="large"
                      >
                        <Icon
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold'
                          }}
                          type="plus"
                        />新建应用
                      </Button>
                    ) : null}
                  </Col>
                </div>
              </Col>
            </Row>
          </div>
        </Form>

        <Table.render tableData={this.props.tableData} />
      </div>
    )
  }
}

HomeToolbar = Form.create()(HomeToolbar)
module.exports = HomeToolbar
