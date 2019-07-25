const hd = {
  path: '/hd',
  name: 'hd',
  children: [
    {
      path: '/wBench',
      name: 'wBench',
    }, {
      path: '/EMR',
      name: 'EMR',
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
}
const hm = {
  path: '/hm',
  name: 'hm',
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
    children: [
      hd,hm
    ]
  }
];




export default routes;