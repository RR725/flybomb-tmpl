/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-09 17:00:11
 */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Menu } from 'antd'
const { SubMenu } = Menu
import { Link } from 'react-router-dom'
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import ajax from '../ajax'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { is } from 'immutable'
import headerActions from '../header/actions'
class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(nextProps.header.get('subNav'), this.props.header.get('subNav')) &&
      is(
        nextProps.header.get('currentId'),
        this.props.header.get('currentId')
      ) &&
      is(
        nextProps.header.get('currentNavId'),
        this.props.header.get('currentNavId')
      )
    ) {
      return false
    }
    return true
  }

  render() {
    let { header, location } = this.props
    let pathname = location.pathname
    let subNav = header.get('subNav')
    let currentId = utils.queryString('currentId', location.search)
    let openId = utils.queryString('openId', location.search)
    let sideMenu = subNav.map(data => {
      if (data.children && data.children.length ) {
        return (
          <SubMenu key={data.id} title={data.name}>
            {data.children.map(opt => {
              let { id, name, pageUrl } = opt
              if (opt.pageUrl === pathname) {
                openId = data.id + ''
                currentId = id + ''
              }

              return (
                <Menu.Item key={id}>
                  <Link to={pageUrl}>{name}</Link>
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      } else {
        let { id, name, pageUrl } = data

        openId = 'null'
        currentId = id + ''
        return (
          <Menu.Item key={id}>
            <Link to={pageUrl}>{name}</Link>
          </Menu.Item>
        )
      }
    })

    if (!openId) return null
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={[currentId]}
        selectedKeys={[currentId]}
        defaultOpenKeys={[openId]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {sideMenu}
      </Menu>
    )
  }
}

export default withRouter(
  connect(
    state => state,
    headerActions
  )(Sidebar)
)
