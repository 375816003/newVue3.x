const Home = () => import("views/Home.vue")
const About = () => import("views/About.vue")
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];




export default routes;