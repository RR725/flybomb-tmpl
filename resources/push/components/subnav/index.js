/*
 * @Author: ecofe 
 * @Date: 2018-07-02 09:16:06 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-02 15:06:49
 */
import React from 'react'
import { Form, Select } from 'antd'
import { Link } from 'react-router-dom'
const FormItem = Form.Item
const Option = Select.Option
import utils from '../../lib/utils'
import restapi from '../../lib/url-model'
import './index.css'
import defaultPermission from '../../js/default-permission'
class Sider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      permission: true,
      all: '全部应用'
    }
  }

  getSubNav() {
    const hash = window.location.hash
    const userAuth =
      document.getElementById('userAuth') &&
      document.getElementById('userAuth').innerHTML //在main.js里设置值
    let appId = utils.queryString('appId', window.location.href)
    let newAppId = appId
    const firstApp = null //this.props.listApp[0]
    if (!appId || appId === '0') {
      if (
        (hash.indexOf('/data') === 1 ||
          hash.indexOf('/sms/push/') > -1 ||
          hash.indexOf('/config/black') > -1 ||
          hash.indexOf('/platform/user/group/config') > -1 ||
          hash.indexOf('/config/callback') > -1) &&
        userAuth > 1
      ) {
        newAppId = '0'
      } else {
        if (firstApp) {
          newAppId = firstApp.appId
        }
      }
    }
    let data = this.props.data

    // if (userAuth > 1) {
    // 	data = {
    // 		value: {
    // 			permission: defaultPermission.data(appId, newAppId)
    // 		}
    // 	}
    // }
    // config = defaultPermission.data(appId, newAppId)[type];
    if (!data) return <span />
    const dataSource = data && data.value && data.value.permission
    let source = []

    const path = this.props.path
    const type = path.split('/')[1]

    dataSource.map(function(opt, key) {
      const pageUrl = opt.pageUrl
      let pageType = pageUrl.split('/')[1]
      if (pageType === type) {
        source = opt.childModuleList
      }
    })
    if (!source) {
      return null
    }
    const li = source.map(function(data, key) {
      let url = data.pageUrl
      let id = newAppId
      if (url.indexOf('account') < 0) {
        if (
          (url.indexOf('/sms/push?') > -1 ||
            url.indexOf('/platform/app/list') > -1 ||
            url.indexOf('/platform/data') > -1 ||
            url.indexOf('/config/app') > -1 ||
            url.indexOf('/config/debug') > -1 ||
            url.indexOf('/config/push/audit') > -1 ||
            url.indexOf('/config/auditor/manage') > -1 ||
            url.indexOf('/config/tag') > -1) &&
          firstApp &&
          (!appId || appId === '0')
        ) {
          //创建短信页
          id = firstApp.appId
        }
        url = utils.makeUrl(url, {
          appId: id
        })
      }

      return (
        <li key={key}>
          <Link data-id={data.parentId} activeclassname="active" to={url}>
            {data.name}
          </Link>
        </li>
      )
    })
    return li
  }
  componentDidMount() {
    let appId = utils.queryString('appId', window.location.href)

    this.setState({
      appId: appId
    })
    // console.log(this.props.path);
    // const hash=utils.makeUrl(this.props.path,{});
    // window.location.href=window.location.pathname+'#'+hash;
  }
  selectType(value, name) {
    // console.log(value)
    // console.log(name)
    this.props.form.setFieldsValue({
      appId: value
    })
    this.setState({
      appId: value,
      appName: name
    })
    let obj = utils.getQueryObj(window.location.hash)
    if (value) {
      obj.appId = value
    } else {
      obj.appId = 0
    }
    const hash = utils.makeUrl(this.props.path, obj)
    window.location.href = window.location.pathname + '#' + hash
  }
  getAppName(appId, appName) {
    const allApp = this.props.listApp //拿到所有应用
    if (allApp) {
      for (let i = 0; i < allApp.length; i++) {
        if (allApp[i].appId == appId) {
          appName = allApp[i].name
        }
      }
    }
    return appName
  }
  changeType(value) {
    this.setState({
      searchType: value
    })
  }
  render() {
    let appId = utils.queryString('appId', window.location.href)
    let currentAppId = utils.queryString('currentAppId', window.location.href)
    let newAppId = appId
    // const firstApp = this.props.listApp[0]
    // if (!appId || appId === '0') {
    //   if (firstApp) {
    //     newAppId = firstApp.appId
    //   }
    // }
    let html
    const path = this.props.path
    let appName = this.state.appName || '全部应用'
    const type = path.split('/')[1]
    let all = '全部应用'
    // const firstApp = this.props.listApp[0];

    if (
      path === '/sms/push' ||
      type === 'config' ||
      type === 'create' ||
      type === 'analyze' ||
      type === 'personal'
    ) {
      all = null
      appName = this.getAppName(appId, appName)
    }
    if (
      path.indexOf('/config/black') > -1 ||
      path.indexOf('/config/callback') > -1
    ) {
      all = '全部应用'
    }
    if (
      path.indexOf('/data/') > -1 ||
      path.indexOf('/config/black') > -1 ||
      path.indexOf('/config/callback') > -1
    ) {
      if (!appId || appId === '0') {
        appName = '全部应用'
        // if(firstApp){
        // 	appId=firstApp.appId;

        // }
      } else {
        appName = this.getAppName(appId, appName)
      }
    }
    const androidInitData = {
      api: restapi.listUserApp,
      width: '190',
      all: all,
      appName: appName,
      name: 'appId',
      appId: appId
    }
    const formItemLayout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    }
    const userAuth =
      document.getElementById('userAuth') &&
      document.getElementById('userAuth').innerHTML //在main.js里设置值
    const disabled = userAuth > 1 ? false : true
    const display = userAuth > 1 ? '' : 'none'

    const platformApplistStatus = utils.usergroupConfig
      ? path.indexOf('platform/app/list') > -1 ||
        path.indexOf('platform/data') > -1
      : type === 'platform'
    html = (
      <div className="subnav">
        <ul className="subnav_con">{this.getSubNav()}</ul>
      </div>
    )
    if (type === 'notice') {
      html = (
        <div className="subnav">
          <ul className="subnav_con">
            <li>
              <Link id="NoticeList" activeclassname="active" to="/notice/list">
                公告
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    if (type === 'account') {
      html = (
        <div className="subnav">
          <ul className="subnav_con">
            <li style={{ display: display }}>
              <Link
                id="accountManage"
                activeclassname="active"
                to={'/account/role?currentAppId=' + currentAppId}
              >
                角色管理
              </Link>
            </li>
            <li>
              <Link
                id="accountManage"
                activeclassname="active"
                to={'/account/manage?currentAppId=' + currentAppId}
              >
                账号管理
              </Link>
            </li>
            <li style={{ display: display }}>
              <Link
                id="accountManage"
                activeclassname="active"
                to={'/account/module?currentAppId=' + currentAppId}
              >
                权限模块配置
              </Link>
            </li>
            <li style={{ display: display }}>
              <Link
                id="accountManage"
                activeclassname="active"
                to={'/account/app/auth?currentAppId=' + currentAppId}
              >
                应用权限组配置
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    if (type === 'home' || type === 'user') {
      //首页和用户群不需要
      html = ''
    }
    return <Form horizontal="true">{html}</Form>
  }
}
Sider = Form.create()(Sider)
module.exports = Sider
