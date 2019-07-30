const workBench = () => import("views/hdSystem/workBench/index.vue")
const workBenchBG = () => import("views/hdSystem/workBench/bg")
const workBenchBP = () => import("views/hdSystem/workBench/bp")
const workBenchDYBG = () => import("views/hdSystem/workBench/dybg")
const workBenchDYBP = () => import("views/hdSystem/workBench/dybp")
const workBenchUA = () => import("views/hdSystem/workBench/ua")
const workBenchBK = () => import("views/hdSystem/workBench/bk")
const workBenchBL = () => import("views/hdSystem/workBench/bl")
const workBenchHBA = () => import("views/hdSystem/workBench/hba")
const workBenchBT = () => import("views/hdSystem/workBench/bt")
const EMR = () => import("views/hdSystem/EMR/index.vue")
const operation = () => import("views/hdSystem/EMR/operation")
const hdData = () => import("views/hdSystem/EMR/hdData")
const hmData = () => import("views/hdSystem/EMR/hmData")
const hygiene = () => import("views/hdSystem/EMR/hygiene")
const familyDoc = () => import("views/hdSystem/EMR/familyDoc")
const hdModle = [
  {
    path: '/workBench',
    name: 'workBench',
    component: workBench,
    children: [
      {
        path: 'bg',
        name: 'bg',
        component: workBenchBG,
      }, {
        path: 'bp',
        name: 'bp',
        component: workBenchBP,
      }, {
        path: 'dybg',
        name: 'dybg',
        component: workBenchDYBG,
      }, {
        path: 'dybp',
        name: 'dybp',
        component: workBenchDYBP,
      }, {
        path: 'ua',
        name: 'ua',
        component: workBenchUA,
      }, {
        path: 'bk',
        name: 'bk',
        component: workBenchBK,
      }, {
        path: 'bl',
        name: 'bl',
        component: workBenchBL,
      }, {
        path: 'hba',
        name: 'hba',
        component: workBenchHBA,
      }, {
        path: 'bt',
        name: 'bt',
        component: workBenchBT,
      }
    ]
  }, {
    path: '/EMR',
    name: 'EMR',
    component: EMR,
    children: [
      {
        path: 'hdData',
        name: 'hdData',
        component: hdData,
      }, {
        path: 'hmData',
        name: 'hmData',
        component: hmData,
      }, {
        path: 'familyDoc',
        name: 'familyDoc',
        component: familyDoc,
      },
      , {
        path: 'hygiene',
        name: 'hygiene',
        component: hygiene,
      }, {
        path: 'operation',
        name: 'operation',
        component: operation,
      }
    ]
  }, {
    path: '/history',
    name: 'history',
  }, {
    path: '/analyse',
    name: 'analyse',
  }, {
    path: '/equip',
    name: 'equip',
  },
]



//院外管理
const hmModle = []









//系统管理
const setting = () => import("views/setting")
const orgMgr = () => import("views/setting/orgMgr.vue")
const roleMgr = () => import("views/setting/roleMgr")
const accountMgr = () => import("views/setting/accountMgr")
const ruleMgr = () => import("views/setting/ruleMgr")
const settingModle = {
  path: '/setting',
  name: 'setting',
  component: setting,
  children: [
    {
      path: 'orgMgr',
      name: 'orgMgr',
      component: orgMgr
    }, {
      path: 'roleMgr',
      name: 'roleMgr',
      component: roleMgr
    }, {
      path: 'accountMgr',
      name: 'accountMgr',
      component: accountMgr
    }, {
      path: 'ruleMgr',
      name: 'ruleMgr',
      component: ruleMgr
    },
  ]
}
const loginDoctor = () => import("views/login/loginDoctor.vue")
const root = () => import("views/layout")

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'login',
    component: loginDoctor
  },
  {
    path: '/root',
    name: 'root',
    component: root,
    // redirect:'/root/hdSystem/workBench',
    children: [
      ...hdModle, ...hmModle, settingModle
    ]
  }
];



export default routes;