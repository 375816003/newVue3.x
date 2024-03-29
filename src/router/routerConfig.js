import store from 'store'
import session from "storage";
/**
 * sys  一级菜单   系统切换（院外、院内等 并未在路由中 显示）
 * sys_module 二级菜单  模块切换（工作台、报警等）
 * sys_module_operation 三级菜单  （功能操作、数据等）
 * sys_module_operation_classify 四级菜单 （血糖、血压等）
 * sys_module_operation_classify_data  五级菜单 （血糖数据、血糖图表等）
 * id 及时id
 * path 路径
 * name 显示的文字
 * permiss 权限 
 * grade  子集对照表用  (levels)
*/
const sys = [
  { id: 'hdSystem', path: '/root/hdSystem', name: '院内管理', permiss: '', grade:1 },
  { id: 'hmSystem', path: '/root/hmSystem', name: '院外管理', permiss: '', grade: 1 },
  { id: 'phSystem', path: '/root/phSystem', name: '基本公卫', permiss: '', grade: 1 },
  { id: 'familyDoc', path: '/root/familyDoc', name: '家庭医生', permiss: '', grade: 1 },
];
const sys_module = {
  base:'',
  hdSystem: {
    conf: { grade: 2, root:''},
    children:[
      { id: 'workBench', path: '/workBench', name: '工作台', permiss: '' },
      { id: 'EMR', path: '/EMR', name: '电子病历', permiss: '' },
      { id: 'history', path: '/history', name: '历史记录', permiss: '' },
      { id: 'analyse', path: '/analyse', name: '统计分析', permiss: '' },
      { id: 'equip', path: '/equip', name: '设备管理', permiss: ''  }
    ]
  },
  hmSystem: {
    conf: { grade: 2, root: '' },
    children: [
      { id: 'workBench', path: '/workBench', name: '工作台2', permiss: '' },
      { id: 'EMR', path: '/EMR', name: '电子病历2', permiss: '' },
      { id: 'history', path: '/history', name: '历史记录2', permiss: '' },
      { id: 'analyse', path: '/analyse', name: '统计分析2', permiss: '' },
      { id: 'equip', path: '/equip', name: '设备管理2', permiss: '' }
    ]
  },
};
const sys_module_operation = {
  workBench: {
    conf: { grade: 3, root: '/workBench' },
    children:[{ id: 'bg', path: '/bg', name: '血糖', permiss: ''},
    { id: 'bp', path: '/bp', name: '血压', permiss: ''},
    { id: 'dybg', path: '/dybg', name: '动态血糖', permiss: ''},
    { id: 'dybp', path: '/dybp', name: '动态血压', permiss: ''},
    { id: 'ua', path: '/ua', name: '血尿酸', permiss: ''},
    { id: 'bk', path: '/bk', name: '血酮', permiss: ''},
    { id: 'bl', path: '/bl', name: '血脂', permiss: '' },
    { id: 'hba', path: '/hba', name: '糖化血红蛋白', permiss: ''},
    { id: 'bt', path: '/bt', name: '体温', permiss: '' },
  ]},
  EMR: {
    conf: { grade: 3, root: '/EMR' },
    children:[
      { id: 'operation', path: '/operation', name: '功能操作', permiss: '' },
      { id: 'hdData', path: '/hdData', name: '院内数据', permiss: '' },
      { id: 'hmData', path: '/hmData', name: '院外数据', permiss: ''},
      { id: 'hygiene', path: '/hygiene', name: '基本公卫数据', permiss: ''},
      { id: 'familyDoc', path: '/familyDoc', name: '家庭医生数据', permiss: '' },
    ]
  },
  setting: {
    conf: { grade: 3, root: '/setting' },
    children: [
      { id: 'orgMgr', path: '/orgMgr', name: '机构管理', permiss: '' },
      { id: 'roleMgr', path: '/roleMgr', name: '角色管理', permiss: '' },
      { id: 'accountMgr', path: '/accountMgr', name: '医护管理', permiss: '' },
      { id: 'ruleMgr', path: '/ruleMgr', name: '规则管理', permiss: '' }
    ]
  }
};
const sys_module_operation_classify = {};
const sys_module_operation_classify_data = {};
const levels = {
  '0': sys,
  '1': sys_module,
  '2': sys_module_operation,
  '3': sys_module_operation_classify,
  '4': sys_module_operation_classify_data,
}
function getRoute(obj) {
  if (!obj ) return sys;
  let level = levels[obj.grade];
  let real = _.cloneDeep(level[obj.id]) ;
  let conf = real.conf;
  let children = real.children || [];
  for (let i = 0; i < children.length; i++){
    children[i].path = conf.root + children[i].path;
    children[i].grade = conf.grade;
  }
  store.dispatch('setRoutes', children)
  session.setSession('routes', children)
  return children;
}
export default getRoute;