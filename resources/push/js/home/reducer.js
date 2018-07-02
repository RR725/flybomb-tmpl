/*
 * @Author: ecofe 
 * @Date: 2018-06-29 15:54:35 
 * @Last Modified by: ecofe
 * @Last Modified time: 2018-07-02 09:14:07
 */
'use strict'
const initialState = {
  current: 1,
  tableData: {
    loading: false, //ajax完成状态
    data: [], //表格数据
    pagination: null //表格分页
  }
}

function update(state = initialState, action) {
  if (action.type === 'loading') {
    return action.data
  } else if (action.type === 'loaded') {
    return action.data
  } else if (action.type === 'pagination') {
    return { current: action.data.current }
  }
  return state
}
export default update
