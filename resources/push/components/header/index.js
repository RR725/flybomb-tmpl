/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by:   ecofe 
 * @Last Modified time: 2018-07-02 09:15:17 
 */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Dropdown, Badge } from 'antd'
import { Link } from 'react-router-dom'
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import ajax from '../ajax'
import ProductTypeApp from '../../js/producttype-app' //产品类型和应用的下拉列表
import defaultPermission from '../../js/default-permission'
import './index.css'
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      permission: true
    }
  }

  componentDidMount() {}

  render() {
    const logoutUrl =
      restapi.logout + '?gotoURL=' + encodeURIComponent(location.origin)
    let permission =
      this.props.data &&
      this.props.data.value &&
      this.props.data.value.permission

    const hash = window.location.hash
    const userTypes =
      (this.props.loginInfo && this.props.loginInfo.userTypes) || []
    let userAuth = 0
    for (let i = 0; i < userTypes.length; i++) {
      userAuth += userTypes[i]
    }
    if (hash.indexOf('/home') === 1 && userAuth < 2) {
      permission = null
    }
    let appId = utils.queryString('appId', window.location.href)
    let listApp = this.props.listApp
    const firstApp = listApp[0]

    let menuMain = null
    let headMenu = []
    headMenu.push(
      <Menu.Item key="home">
        <Link id="home" activeclassname="active" to={'/home'}>
          首页
        </Link>
      </Menu.Item>
    )

    if (permission) {
      let id = ''
      permission.map(function(data, key) {
        let url = ''
        let childModuleList = data.childModuleList
        let name = data.name

        url = utils.makeUrl(data.pageUrl, {
          appId: appId
        })
        id = 'nav' + data.id

        if (name === '首页' || name === '账号管理') {
        } else {
          headMenu.push(
            <Menu.Item key={name}>
              <Link id={id} activeclassname="active" to={url}>
                {name}
              </Link>
            </Menu.Item>
          )
        }
      })
    }

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <a href={logoutUrl}>退出</a>
        </Menu.Item>
      </Menu>
    )

    menuMain = (
      <Menu
        className="fl main_nav"
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {headMenu}
      </Menu>
    )
    return (
      <div className="header">
        <div className="header_con">
          <div className="fr fs14 account">
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                <img
                  width="42"
                  height="42"
                  src={this.props.loginInfo && this.props.loginInfo.icon}
                />
                <span
                  id="userName"
                  data-id={this.props.loginInfo && this.props.loginInfo.userId}
                  className="pr10"
                >
                  {this.props.loginInfo && this.props.loginInfo.flyme}
                </span>
                <Icon type="down" />
              </a>
            </Dropdown>
          </div>
          <h1 className="fl fs16">
            <img
              src={utils.cdn + '/resources/push/images/logo.jpg'}
              width="225"
              height="90"
            />
          </h1>
          {menuMain}
        </div>
      </div>
    )
  }
}

module.exports = Header
