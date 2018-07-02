/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:55 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-02 09:14:21
 */
'use strict'
import React from 'react'
import Toolbar from './toolbar'
import actions from './actions'
import libActions from '../../lib/actions'

import restapi from '../../lib/url-model'
import utils from '../../lib/utils'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    document.querySelector('#home').className = ''
  }
  componentDidMount() {
    document.querySelector('#home').className = 'active'
  }
  render() {
    return (
      <div>
        <Toolbar
          {...this.props}
          current={this.props.home.current}
          tableData={this.props.home.tableData}
          getTableData={this.tableData}
        />
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => {
      return { home: state.home, common: state.common }
    },
    Object.assign(actions, libActions)
  )(HomeIndex)
)
