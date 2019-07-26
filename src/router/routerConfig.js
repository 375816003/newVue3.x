/** 
 * sys  一级菜单   系统切换（院外、院内等）
 * sys_module 二级菜单  模块切换（工作台、报警等）
 * sys_module_operation 三级菜单  （功能操作、数据等）
 * sys_module_operation_classify 四级菜单 （血糖、血压等）
 * sys_module_operation_classify_data  五级菜单 （血糖数据、血糖图表等）
*/
const sys = [
  { id: 'hd', path: '/hd', name: '院内管理', permiss: '' },
  { id: 'hm', path: '/hm', name: '院外管理', permiss: '' }
];
const sys_module = {
  hd: [
    { id: 'hd_wBench', path: '/wBench', name: '工作台', permiss: ''},
    { id: 'EMR', path: '/EMR', name: '电子病历', permiss: '' },
    { id: 'history', path: '/history', name: '历史记录', permiss: '' },
    { id: 'analyse', path: '/analyse', name: '统计分析', permiss: '' },
    { id: 'equip', path: '/equip', name: '设备管理', permiss: '' },
  ],
  hm: [
    { id: 'hd_wBench', path: '/wBench', name: '工作台2', permiss: '' },
    { id: 'EMR', path: '/EMR', name: '电子病历2', permiss: '' },
    { id: 'history', path: '/history', name: '历史记录2', permiss: '' },
    { id: 'analyse', path: '/analyse', name: '统计分析2', permiss: '' },
    { id: 'equip', path: '/equip', name: '设备管理2', permiss: '' },
  ]
};
const sys_module_operation = {};
const sys_module_operation_classify = {};
const sys_module_operation_classify_data = {};
const levels = {
  '0': sys,
  '1': sys_module,
  '2': sys_module_operation,
  '3': sys_module_operation_classify,
  '4': sys_module_operation_classify_data,
}
function getRoute(id) {
  if (id === undefined) return sys;
  
  let grade = id.split('_').length.toString();
  let level = levels[grade];
  return level[id];
}
export default getRoute;