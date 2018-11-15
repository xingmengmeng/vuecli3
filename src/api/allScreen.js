import fetch from '@/api/http'
//GET  /active11/todayRegionDistributed.gm  地域分布接口
export const regionDistributed = async data => {
  return await fetch.get('/coolscreen/active11/todayRegionDistributed.gm', data)
}
