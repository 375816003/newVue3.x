/** 
 * sys  一级菜单   系统切换（院外、院内等）
 * sys_module 二级菜单  模块切换（工作台、报警等）
 * sys_module_operation 三级菜单  （功能操作、数据等）
 * sys_module_operation_classify 四级菜单 （血糖、血压等）
 * sys_module_operation_classify_data  五级菜单 （血糖数据、血糖图表等）
*/
const sys = [];
const sys_module = {};
const sys_module_operation = {};
const sys_module_operation_classify = {};
const sys_module_operation_classify_data = {};
const levels = {
  '1': sys,
  '2': sys_module,
  '3': sys_module_operation,
  '4': sys_module_operation_classify,
  '5': sys_module_operation_classify_data,
}
function getRoute(id) {
  if (id === undefined) return sys;
  let grade = id.split('_').length.toString();
  let level = levels[grade];
  return level[id];
}
export default getRoute;