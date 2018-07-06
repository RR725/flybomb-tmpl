/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 17:51:11
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

  componentDidMount() {
    console.log(this.props.header.get('currentNavId'))
    console.log(this.props.location)
    // window.onhashchange = () => {
    //   this.props.getSubNavCurrentId({
    //     currentId: utils.queryString('currentId', this.props.location.search)
    //   })
    // }
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(nextProps.header.get('subNav'), this.props.header.get('subNav')) &&
      is(
        nextProps.header.get('currentId'),
        this.props.header.get('currentId')
      )&&
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
    let { header } = this.props
    let subNav = header.get('subNav')
    let currentId = utils.queryString('currentId', this.props.location.search)
    let openId = utils.queryString('openId', this.props.location.search)
    let sideMenu = subNav.map(data => {
      if (data.children && data.children.length > 0) {
        return (
          <SubMenu key={data.id} title={data.name}>
            {data.children.map(opt => {
              let { id, name, pageUrl } = opt
              let url = utils.makeUrl(pageUrl, {
                openId: data.id,
                currentId: id
              })
              return (
                <Menu.Item key={id}>
                  <Link to={url}>{name}</Link>
                </Menu.Item>
              )
            })}
          </SubMenu>
        )
      } else {
        let { id, name, pageUrl } = data
        let url = utils.makeUrl(pageUrl, {
          currentId: id
        })
        return (
          <Menu.Item key={id }>
            <Link to={url}>{name}</Link>
          </Menu.Item>
        )
      }
    })

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
