import field from './field'
import company from './company'
import SysUtil from 'utils/sysUtil'
function getField(key) {
  let value = field[key];
  if (SysUtil.isEmpty(value)) {
    throw Error('没有该字段');
    return;
  }
  return field[key];
}
function getOther(key) {
  let value = company[key];
  if (SysUtil.isEmpty(value)) {
    throw Error('没有该字段');
    return;
  }
  return company[key];
}


export default {
  field: getField,
  company: getOther
}