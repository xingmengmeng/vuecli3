import fetch from '@/api/http'
//GET  /active11/todayRegionDistributed.gm  地域分布接口
export const regionDistributed = async data => {
  return await fetch.get('/api/details', data)
}
export const list = async data => {
  return await fetch.post('/api/list', data)
}
export const insert = async data => {
  return await fetch.post('/api/insert', data)
}
export const update = async data => {
  return await fetch.post('/api/update', data)
}
export const deletes = async data => {
  return await fetch.delete('/api/deletes', data)
}
