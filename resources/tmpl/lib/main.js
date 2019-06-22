/*
 * @Author: ecofe
 * @Date: 2018-06-29 15:55:44
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-11 15:32:12
 */
'use strict'

// import { createDevTools } from "redux-devtools";
// import LogMonitor from "redux-devtools-log-monitor";
// import DockMonitor from "redux-devtools-dock-monitor";
import 'babel-polyfill'

import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import 'normalize-css/normalize.css'
import '../css/base.less'
import React from 'react'
import { render } from 'react-dom'

import Bundle from './bundle.js'
import restapi from './url-model'
import utils from './utils'

import page404 from './404'

import {
  Router,
  Route,
  IndexRoute,
  Link,
  withRouter,
  Switch,
  HashRouter,
  Redirect
} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
const { Header, Content, Sider } = Layout
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Head from '../components/header'
import Foot from '../components/footer'
import BreadCrumbList from '../components/breadcrumb'
import Sidebar from '../components/sidebar'
import ajax from '../components/ajax'
import HomeTable from '../js/module1/table'

import reducers from './reducers'
const reducer = combineReducers(
  Object.assign(reducers, {
    routing: routerReducer
  })
)
//模块全部按需加载

const LoadComponents = path => (
  //必须写成字符串模板的形式`../js/${path}`，写成纯变量虽然es6支持，但现在webpack的实现是不支持的
  <Bundle load={() => import(`../js/${path}`)}>{Comp => <Comp />}</Bundle>
)

// const DevTools = createDevTools(
// 	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
// 		<LogMonitor theme="tomorrow" preserveScrollTop={false} />
// 	</DockMonitor>
// );
const store = createStore(reducer) //, DevTools.instrument()
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let states = store.getState()
    const children = this.props.children
    return (
      <Layout>
        <Header className="header">
          <Head />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Sidebar />
          </Sider>
          <Layout style={{ padding: '0 24px' }}>
            <BreadCrumbList />
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <div>{children}</div>
            </Content>
          </Layout>
        </Layout>
        <Foot />
      </Layout>
    )
  }
}
const AppComponent = withRouter(App)
render(
  <Provider store={store}>
    <div>
      <HashRouter>
        <AppComponent>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Redirect to="/module1" component={() => LoadComponents('module1')} />
              )}
            />
            <Route
              exact
              path="/module1/menu100/sub1000"
              component={() => LoadComponents('module1')}
            />
            <Route
              exact
              path="/module1/menu100/sub2000"
              component={() => LoadComponents('module1/add-app')}
            />
            <Route component={page404} />
          </Switch>
        </AppComponent>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('wrap')
)
