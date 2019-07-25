const loginDoctor = () => import("views/login/loginDoctor.vue")

const routes = [
  {
    path: '/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'login',
    component: loginDoctor
  }
];




export default routes;