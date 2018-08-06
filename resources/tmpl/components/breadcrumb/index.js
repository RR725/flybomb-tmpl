/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:15:17 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-11 17:32:29
 */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import ajax from '../ajax'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { is } from 'immutable'
import actions from './actions'
import headerActions from '../header/actions'
class BreadcrumbList extends React.Component {
  constructor(props) {
    super(props)
  }
  onhashchange() {
    let { header } = this.props
    let subNav = header.get('subNav')
    let mainNav = header.get('mainNav')
    const { pathname, search } = this.props.location
    const openId = utils.queryString('openId', search)
    const currentId = utils.queryString('currentId', search)
    let breadcrumb = []
    mainNav.forEach(data => {
      if (data.pageUrl.split('/')[1] === pathname.split('/')[1]) {
        breadcrumb.push(data.name)
      }
    })
    subNav.forEach(data => {
      if (data.children && data.children.length) {
        data.children.map(opt => {
          if (opt.pageUrl === pathname) {
            breadcrumb.push(data.name)
            breadcrumb.push(opt.name)
          }
        })
      } else {
        if (data.pageUrl === pathname) {
          breadcrumb.push(data.name)
        }
      }
    })

    this.props.getBreadcrumb({ breadcrumb: breadcrumb })
  }

  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(
        nextProps.breadcrumb.get('breadcrumb'),
        this.props.breadcrumb.get('breadcrumb')
      )
    ) {
      this.onhashchange()
      return false
    }
    return true
  }
  render() {
    const breadcrumb = this.props.breadcrumb.get('breadcrumb')
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {breadcrumb.map(data => {
          return <Breadcrumb.Item key={data}>{data}</Breadcrumb.Item>
        })}
      </Breadcrumb>
    )
  }
}

export default withRouter(
  connect(
    state => state,
    Object.assign(actions, headerActions)
  )(BreadcrumbList)
)
