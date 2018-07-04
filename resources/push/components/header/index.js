/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-04 11:37:13
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
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { is } from 'immutable'
import actions from './actions'
import './index.css'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getData()
  }
  async getData() {
    let listApp = await ajax.get(restapi.listUserApp)
    listApp = listApp.value

    
    let loginInfo = await ajax.get(restapi.getLoginInfo)
    loginInfo = loginInfo.value
  
    let permission = {}
    if (loginInfo.userTypes[0] > 1) {
      permission = await ajax.get(restapi.getPermission)
    } else {
      permission = await ajax.get(restapi.getPermission + '?appId=' + appId)
    }
    const json = {
      loginInfo: loginInfo,
      listApp: listApp,
      permission: permission.value
    }
    this.props.getAjaxDatas(json)
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(
        nextProps.header.get('loginInfo', 'icon'),
        this.props.header.get('loginInfo', 'icon')
      )
    ) {
      return false
    }
    return true
  }
  render() {
    let { header } = this.props
    let permission = header.get('permission')
    let loginInfo = header.get('loginInfo')

    const logoutUrl =
      restapi.logout + '?gotoURL=' + encodeURIComponent(location.origin)//登出 
    let pm = permission.permission

    const hash = window.location.hash
    const userTypes = (loginInfo && loginInfo.userTypes) || []
    let userAuth = userTypes[0]
    
    if (hash.indexOf('/home') === 1 && userAuth < 2) {
      pm = null
    }
    let appId = utils.queryString('appId', window.location.href)

    let menuMain = null
    let headMenu = []
    headMenu.push(
      <Menu.Item key="/home">
        <Link id="home" activeclassname="active" to={'/home'}>
          首页
        </Link>
      </Menu.Item>
    )
    if (pm) {
      let id = ''
      pm.map(function(data, key) {
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
            <Menu.Item key={data.pageUrl}>
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
    console.log(this.props.location)
    menuMain = (
      <Menu
        className="fl main_nav"
        selectedKeys={[this.props.location.pathname]}
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
                <img width="42" height="42" src={loginInfo && loginInfo.icon} />
                <span
                  id="userName"
                  data-id={loginInfo && loginInfo.userId}
                  className="pr10"
                >
                  {loginInfo && loginInfo.flyme}
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

export default withRouter(
  connect(
    state => state,
    actions
  )(Header)
)
