'use strict'

module.exports = [
  {
    params: {
      appId: 0,
      index: 1
    },
    url: '/garcia/webjsp/appConfig/listAppData',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: {
        amount: 196,
        autoAmount: true,
        count: 10,
        end: 9,
        hasNext: true,
        hasPrev: false,
        index: 1,
        isFirst: true,
        isLast: false,
        result: [
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/garcia/82aa0d28c301438a93928dbcbdb32b6cz',
            appId: 651,
            appName: '普通应用',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.meizu.pushdemo133333',
            pushAppId: 113641
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/mzups/8d7e1e879fb94d7180b3729fef5a68afz',
            appId: 650,
            appName: 'o30Gg',
            appType: 0,
            onlineNum: '-',
            packageName: 'GGxq.G256',
            pushAppId: 113640
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/mzups/8d7e1e879fb94d7180b3729fef5a68afz',
            appId: 649,
            appName: 'wfdgdf',
            appType: 0,
            onlineNum: '-',
            packageName: 'fgfg.fgfg',
            pushAppId: 113639
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/mzups/8d7e1e879fb94d7180b3729fef5a68afz',
            appId: 648,
            appName: '445',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.mm',
            pushAppId: 113638
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/mzups/7735458f52d641d3b26cfab71c960393z',
            appId: 647,
            appName: 'TESTw',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.de.dfd',
            pushAppId: 113637
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/mzups/187f0767c9074dfda64a30f84a607380z',
            appId: 646,
            appName: 'test607',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.mz6.dd7',
            pushAppId: 113636
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/garcia/129829e6b2e645238553deb856ef2a70z',
            appId: 645,
            appName: 'creator',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.meizu.creator.launcher',
            pushAppId: 113635
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/garcia/43bdc63dd141487caaddf95346aa5936z',
            appId: 644,
            appName: 'test.mh',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.meizu.testmh',
            pushAppId: 113634
          },
          {
            allNum: '-',
            appIconUrl: '',
            appId: 643,
            appName: '简易桌面',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.meizu.flyme.easylauncher',
            pushAppId: 113633
          },
          {
            allNum: '-',
            appIconUrl:
              'https://image.meizu.com/image/garcia/fee872f1e5014790b51c3718ec840b06z',
            appId: 635,
            appName: '即刻',
            appType: 0,
            onlineNum: '-',
            packageName: 'com.ruguoapp.jike',
            pushAppId: 112020
          }
        ],
        start: 0,
        total: 20
      }
    }
  },
  {
    url: '/garcia/system/index/getLoginInfo',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: {
        icon:
          'http://img.res.meizu.com/img/download/uc/11/35/35/86/70/113535867/w200h200?t=1509952107000',
        userTypes: [2],
        userId: 2221,
        flyme: 'push2',
        loginName: 'push1'
      }
    }
  },
  {
    url: '/garcia/webjsp/appConfig/listUserApp',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: [
        {
          appId: 648,
          appType: 0,
          name: '445',
          packageName: 'com.mm',
          pushAppId: 113638
        },

        {
          appId: 236,
          appType: 0,
          name: 'remotecontroltv',
          packageName: 'com.meizu.flyme.remotecontroltv',
          pushAppId: 100051
        },
        {
          appId: 254,
          appType: 0,
          name: 'scanner',
          packageName: 'com.meizu.flyme.scanner',
          pushAppId: 100059
        },
        {
          appId: 226,
          appType: 0,
          name: 'usetips',
          packageName: 'com.meizu.flyme.usetips',
          pushAppId: 100034
        },

        {
          appId: 470,
          appType: 0,
          name: '自动化云测平台',
          packageName: 'com.meizu.testdev.mca',
          pushAppId: 110440
        }
      ]
    }
  },
  {
    url: '/garcia/system/permission/get',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: {
        permission: [
          {
            grade: 1,
            id: 21,
            name: '模块1',
            pageUrl: '/module1',
            parentId: 0,
            sort: 1
          },
          {
            grade: 1,
            id: 22,
            name: '模块1',
            pageUrl: '/module2',
            parentId: 0,
            sort: 2
          },
          {
            grade: 1,
            id: 23,
            name: '模块3',
            pageUrl: '/module3',
            parentId: 0,
            sort: 3
          },
          {
            grade: 1,
            id: 24,
            name: '模块4',
            pageUrl: '/module4',
            parentId: 0,
            sort: 4
          }
        ]
      }
    }
  }
]
