/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:55 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-06 15:38:46
 */
'use strict'
import React from 'react'
import Toolbar from './toolbar'
import actions from './actions'
import libActions from '../../lib/actions'

import restapi from '../../lib/url-model'
import utils from '../../lib/utils'

import { is } from 'immutable'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

 

  shouldComponentUpdate(nextProps, nextStates) {
    if (
      is(nextProps.home.get('data'), this.props.home.get('data')) &&
      is(nextProps.home.get('loading'), this.props.home.get('loading')) &&
      is(nextProps.header.get('loginInfo'), this.props.header.get('loginInfo'))
    ) {
      return false
    }
    return true
  }
  render() {
    return <Toolbar {...this.props} />
  }
}
export default withRouter(
  connect(
    state => state,
    Object.assign(actions,libActions)
  )(HomeIndex)
)
