'use strict'

module.exports = [
  {
    params: {
      appId: 0,
      index: 1
    },
    url: '/restapi/app/list',
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
    url: '/restapi/loginInfo',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: {
        icon:
          'http://img.res.meizu.com/img/download/uc/11/35/35/86/70/113535867/w200h200?t=1509952107000',
        userTypes: [2],
        userId: 2221,
        username: 'ecofe'
      }
    }
  },
  {
    url: '/restapi/nav/main',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: [
        {
          id: 21,
          name: '模块1',
          pageUrl: '/module1'
        },
        {
          id: 22,
          name: '模块2',
          pageUrl: '/module2'
        },
        {
          id: 23,
          name: '模块3',
          pageUrl: '/module3'
        },
        {
          id: 24,
          name: '模块4',
          pageUrl: '/module4'
        }
      ]
    }
  },
  {
    params: { id: 21 },
    url: '/restapi/nav/sub',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: [
        {
          id: 31,
          name: '子模块1',
          pageUrl: '/module1',
          children: [
            {
              id: 41,
              name: '孙模块1',
              pageUrl: '/module1'
            }
          ]
        },
        {
          id: 32,
          name: '子模块2',
          pageUrl: '/module1/add-app'
        },
        {
          id: 33,
          name: '子模块3',
          pageUrl: '/module1/sub2'
        },
        {
          id: 34,
          name: '子模块4',
          pageUrl: '/module1/sub3'
        }
      ]
    }
  },
  {
    params: { id: 22 },
    url: '/restapi/nav/sub',
    data: {
      code: '200',
      message: '',
      redirect: '',
      value: [
        {
          id: 131,
          name: '子模块1111',
          pageUrl: '/module2',
          children: [
            {
              id: 141,
              name: '孙模块1',
              pageUrl: '/module2'
            }
          ]
        },
        {
          id: 132,
          name: '子模块2',
          pageUrl: '/module2/add-app'
        },
        {
          id: 133,
          name: '子模块3',
          pageUrl: '/module2/sub2'
        },
        {
          id: 134,
          name: '子模块4',
          pageUrl: '/module2/sub3'
        }
      ]
    }
  }
]
