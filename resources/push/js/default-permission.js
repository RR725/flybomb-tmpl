/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:55:23 
 * @Last Modified by:   ecofe 
 * @Last Modified time: 2018-06-29 15:55:23 
 */
'use strict'

const defaultPermission = {
  data(appId, newAppId, personalAppId) {
    if (!appId) {
      appId = 0
    }
    if (!newAppId) newAppId = appId
    return {
      首页: [
        { id: 'home', code: '12', name: '首页', to: '/home', type: '首页' }
      ],
      创建推送: [
        {
          id: 'createPush',
          code: '1000',
          name: '推送通知',
          to: '/create/push/?pushType=notice&appId=' + newAppId,
          type: '创建推送'
        },
        {
          id: 'createPush',
          code: '1001',
          name: '透传消息',
          to: '/create/push/?pushType=message&appId=' + newAppId,
          type: '创建推送'
        },
        {
          id: 'createPush',
          code: '1002',
          name: '分组推送',
          to: '/create/push/?pushType=group&appId=' + newAppId,
          type: '创建推送'
        },
        {
          id: 'createPush',
          code: '1003',
          name: '定时任务',
          to: '/create/push/?pushType=timing&appId=' + newAppId,
          type: '创建推送'
        },
        {
          id: 'createPush',
          code: '1004',
          name: '桌面通知',
          to: '/create/push/?pushType=desktop&appId=' + newAppId,
          type: '创建推送'
        }
      ],
      数据统计: [
        {
          id: 'dataStat',
          code: '2000',
          to: '/data/push/record?appId=' + appId,
          name: '推送记录',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2001',
          to: '/data/push/stat?appId=' + appId,
          name: '推送统计',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2002',
          to: '/data/push/data?appId=' + appId,
          name: '推送数据',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2003',
          to: '/data/push/group/push?appId=' + appId,
          name: '分组推送',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2004',
          to: '/data/push/user/data?appId=' + appId,
          name: '用户数据',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2005',
          to: '/data/detail/list?appId=' + appId,
          name: '推送详情',
          type: '数据统计'
        },
        {
          id: 'dataStat',
          code: '2006',
          to: '/data/push/timing?appId=' + appId,
          name: '定时任务',
          type: '数据统计'
        }
      ],
      配置管理: [
        {
          id: 'configManage',
          code: '3000',
          to: '/config/app?appId=' + newAppId,
          name: '应用配置',
          type: '配置管理'
        },
        {
          id: 'configManage',
          code: '3001',
          name: '标签用户',
          to: '/config/tag?appId=' + newAppId,
          type: '配置管理'
        },
        {
          id: 'configManage',
          code: '3002',
          name: '问题排查',
          to: '/config/debug?appId=' + newAppId,
          type: '配置管理'
        },
        {
          id: 'configManage',
          code: '3003',
          name: '黑名单',
          to: '/config/black?appId=' + newAppId,
          type: '配置管理'
        },
        {
          id: 'configManage',
          code: '3004',
          name: '回执管理',
          to: '/config/callback?appId=' + newAppId,
          type: '配置管理'
        }
      ],
      个性化推送: [
        {
          id: 'personalPush',
          code: '4000',
          to:
            '/personal/push?pushType=personal&appId=' +
            (personalAppId ? personalAppId : newAppId),
          name: '个性化推送',
          type: '个性化推送'
        },
        {
          id: 'personalPush',
          code: '4001',
          to:
            '/personal/push/resource/lib?pushType=personal&appId=' +
            (personalAppId ? personalAppId : newAppId),
          name: '资源库',
          type: '个性化推送'
        }
      ],
      数据分析: [
        {
          id: 'dataAnalyze',
          code: '5000',
          to: '/analyze/push/attr?appId=' + newAppId,
          name: '推送属性分析',
          type: '数据分析'
        }
        // { 'id': 'dataAnalyze', 'code': '5001', 'to': '/analyze/user/action?appId=' +  appId, 'name': '用户点击行为', 'type': '数据分析' }
      ],
      平台管理: [
        {
          id: 'platformManage',
          code: '6000',
          to: '/platform/app/list',
          name: '应用列表',
          type: '平台管理'
        },
        {
          id: 'platformManage',
          code: '6001',
          to: '/platform/data',
          name: '平台数据',
          type: '平台管理'
        },
        {
          id: 'platformManage',
          code: '6002',
          to: '/platform/module/config',
          name: '模块配置',
          type: '平台管理'
        },
        {
          id: 'platformManage',
          code: '6003',
          to: '/platform/user/group/config',
          name: '用户群配置',
          type: '平台管理'
        }
      ],
      账号管理: [
        {
          id: '',
          code: '6000',
          to: '/account/role',
          name: '角色管理',
          type: '账号管理'
        },
        {
          id: '',
          code: '6001',
          to: '/account/manage',
          name: '账号管理',
          type: '账号管理'
        },
        {
          id: '',
          code: '6002',
          to: '/account/module',
          name: '模块权限配置',
          type: '账号管理'
        },
        {
          id: '',
          code: '6003',
          to: '/account/app/auth',
          name: '应用权限组配置',
          type: '账号管理'
        }
      ]
    }
  }
}

module.exports = defaultPermission
