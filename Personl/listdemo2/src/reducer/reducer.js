/*
 * @Author: Zzceaon
 * @Date: 2020-07-18 19:53:38
 * @LastEditTime: 2020-07-19 02:07:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Course\Personl\listdemo2\src\reducer\reducer.js
 */ 
const defaultState = {
  inputValue: 'Zzceaon',
  list: [
    "YRASA"
  ]
}

export default (state=defaultState, action) => {
  if (action.type === "input_change") {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === 'del_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}