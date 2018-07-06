/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 18:00:59
 */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Row, Col, Dropdown, Badge } from 'antd'
import { Link } from 'react-router-dom'
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import ajax from '../ajax'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { is } from 'immutable'
import actions from './actions'
import './index.less'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getData()
    window.onhashchange = () => {
      console.log(99)
      this.getData()
      this.props.getSubNavCurrentId({
        currentId: utils.queryString('currentId', this.props.location.search)
      })
    }
  }
  async getData() {
    let pathname = this.props.location.pathname
    console.log(pathname)
    let loginInfo = await ajax.get(restapi.getLoginInfo)
    let mainNav = await ajax.get(restapi.getMainNav)
    mainNav = mainNav.value
    let currentNavId = ''
    mainNav.map(data => {
      if (data.pageUrl === pathname) {
        currentNavId = data.id
      }
    })
    let subNav = await ajax.get(
      utils.makeUrl(restapi.getSubNav, { id: currentNavId })
    )
    const json = {
      subNav: subNav.value
    }
    this.props.getSubNav(json)
    this.props.getMainNav({ mainNav: mainNav })
    this.props.getLoginInfo({ loginInfo: loginInfo.value })
    this.props.getCurrentNav({ currentNav: pathname })

    this.props.getCurrentNavId({ currentNavId: currentNavId })
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(
        nextProps.header.get('loginInfo'),
        this.props.header.get('loginInfo')
      ) &&
      is(
        nextProps.header.get('currentNav'),
        this.props.header.get('currentNav')
      )
    ) {
      this.props.getCurrentNav({ currentNav: this.props.location.pathname })
      return false
    }
    return true
  }
  render() {
    let { header } = this.props
    let mainNav = header.get('mainNav')
    let subNav = header.get('subNav')

    let loginInfo = header.get('loginInfo')
    const logoutUrl =
      restapi.logout + '?gotoURL=' + encodeURIComponent(location.origin) //登出
    let appId = utils.queryString('appId', window.location.href)

    let headMenu = []
    mainNav.map(function(data, key) {
      let url = data.pageUrl
      let childModuleList = data.childModuleList
      let name = data.name
      let keyUrl = url.split('?')[0]
      headMenu.push(
        <Menu.Item key={keyUrl.split('/')[1]}>
          <Link activeclassname="active" to={url}>
            {name}
          </Link>
        </Menu.Item>
      )
    })

    subNav.map(()=>{
      
    })

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <a href={logoutUrl}>退出</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="header">
        <div className="fr account">
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              <img width="42" height="42" src={loginInfo && loginInfo.icon} />
              <span className="pr10 user_name">
                {loginInfo && loginInfo.username}
              </span>
              <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <h1 className="fl logo">管理系统</h1>
        <Menu
          theme="dark"
          selectedKeys={[header.get('currentNav').split('/')[1]]}
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          {headMenu}
        </Menu>
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
