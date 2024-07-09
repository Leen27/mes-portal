export const LOGIN_INFO = {
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzeXN0ZW1uYW1lIjoiU1lTVEVNIiwianRpIjoiOGEyODgxNzE5MDhmZGQzZDAxOTA5NTM0NmQzOTAwMWMiLCJ1c2VybmFtZSI6ImFkbWluIn0._fYgXJMQqBYiyYVFDSdAoH55alOqAMsc__ZWimhzJ_0',
  userIp: '10.168.30.101',
  userInfo: {
    id: 'e9ca23d68d884d4ebb19d07889727dae',
    username: 'admin',
    realname: '管理员',
    orgCode: '3824e76e411744a0b0b0776a50eb5f4b',
    sex: 1,
    email: 'development@mail.com',
    phone: '18611111111',
    status: 1,
    delFlag: 0,
    userIdentity: 1,
    post: '总经理',
    userType: 0,
    system: 'SYSTEM',
    params: {},
    roles: ['OCAP', 'admin']
  }
}

export const ENV_DATA = [
  {
    envId: '1',
    envName: '测试环境',
    subEnvs: [
      {
        subEnvId: '1',
        subEnvName: '产品',
        remark: '192.168.1.100'
      },
      {
        subEnvId: '2',
        subEnvName: 'STIC',
        remark: '192.168.1.101'
      },
      {
        subEnvId: '3',
        subEnvName: 'Naura',
        remark: '192.168.1.102'
      },
      {
        subEnvId: '4',
        subEnvName: 'Sidtek',
        remark: '192.168.1.103'
      }
    ]
  },
  {
    envId: '2',
    envName: 'Demo环境',
    subEnvs: [
      {
        subEnvId: '11',
        subEnvName: '产品',
        remark: '192.168.1.104'
      }
    ]
  }
]

export const USER_APPS = {
  appGroups: [
    {
      apps: [
        {
          appId: '1',
          appName: 'Modeler',
          appIcon: 'mod',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '2',
          appName: 'Operator Interface Client',
          appIcon: 'oic',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '3',
          appName: 'Statistical Proc Ctrl',
          appIcon: 'spc',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '4',
          appName: 'Predictive Maintenance Sys',
          appIcon: 'pms',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '5',
          appName: 'Photo Resist Mgt Sys',
          appIcon: 'prms',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '6',
          appName: 'Out Of Control Action Plan',
          appIcon: 'ocap',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '7',
          appName: 'Alarm Mgt Sys',
          appIcon: 'ams',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        }
      ],
      groupName: '生产执行管理'
    },
    {
      apps: [
        {
          appId: '1',
          appName: 'Real Time Scheduling Sys',
          appIcon: 'rts',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '2',
          appName: 'Real Time Dispatch Sys',
          appIcon: 'rtd',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '3',
          appName: 'Auto Queue Mgt',
          appIcon: 'aqm',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        }
      ],
      groupName: '生产排程与调度'
    },
    {
      apps: [
        {
          appId: '1',
          appName: 'FlowMatic Platform',
          appIcon: 'flow',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        }
      ],
      groupName: '工作流平台'
    },
    {
      apps: [
        {
          appId: '1',
          appName: 'Equipment Auto Prog',
          appIcon: 'eap',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '2',
          appName: 'Recipe Mgt Sys',
          appIcon: 'rms',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        }
      ],
      groupName: '自动化控制'
    },
    {
      apps: [
        {
          appId: '1',
          appName: 'Yield Mgt Sys',
          appIcon: 'yms',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '2',
          appName: 'Factory Monitoring Board',
          appIcon: 'fmb',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '3',
          appName: 'Modeler',
          appIcon: 'mod',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        },
        {
          appId: '4',
          appName: 'Remote Control Mgt',
          appIcon: 'rcm',
          appShortName: '',
          appUrl: '',
          redirectUrl: ''
        }
      ],
      groupName: '其他'
    }
  ],
  favourApps: [
    {
      appIcon: 'oic',
      appId: '1',
      appName: 'Operator Interface Client',
      appShortName: '',
      appUrl: '',
      redirectUrl: ''
    },
    {
      appIcon: 'mod',
      appId: '2',
      appName: 'Modeler',
      appShortName: '',
      appUrl: '',
      redirectUrl: ''
    },
    {
      appIcon: 'spc',
      appId: '3',
      appName: 'Statistical Proc Ctrl',
      appShortName: '',
      appUrl: '',
      redirectUrl: ''
    },
    {
      appIcon: 'ocap',
      appId: '4',
      appName: 'Out Of Control Action Plan',
      appShortName: '',
      appUrl: '',
      redirectUrl: ''
    },
    {
      appIcon: 'prms',
      appId: '5',
      appName: 'Photo Resist Mgt Sys',
      appShortName: '',
      appUrl: '',
      redirectUrl: ''
    }
  ]
}
