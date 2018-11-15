import Vue from 'vue'/* 引用vue文件 */
import Router from 'vue-router'/* 引用vue路由模块，并赋值给变量Router */
Vue.use(Router)/* 使用路由 */

const Home = resolve => require(['@/views/Home'], resolve);

export default new Router({
  mode: 'history', // 如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
  // 添加 mode: 'history' ,该模式下没有 # 前缀,URL 就像正常的 url,也好看！
  linkActiveClass: 'active', // 设置激活链接时的class属性，即当前页面所有与当前地址栏匹配的的链接都会被添加class属性
  linkExactActiveClass: 'exact-active', // 配置当链接被精确匹配的时候应该激活的 class
  routes: [/* 进行路由配置，规定“/”引入到某个组件 */
    { path: '/', name: 'home', component: Home },
  ]
})
/* 说明：如果需要增加组件
 * 那就在components文件下定义 xx.vue文件并编写代码即可，
 * 如果需要配置路由就要进行在index.js进行路由“路径”配置，
 * 还需要点击跳转就要用到<router-link></router-link>标签了
 */