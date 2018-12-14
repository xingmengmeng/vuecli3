<template>
  <div class="hello">
    hello world!
    <h5>
      外部less引入测试
    </h5>
    {{msg}}
  </div>
</template>

<script>
import '@/assets/less/layout.less';
import { regionDistributed, list, insert, update, deletes } from '@/api/interface';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    regionDistributed({ id: 3 }).then(res => {
      console.log(1)
    })
    list({ start: '2016-07', end: '2018-02' });
    insert({ kpi: 110, month: "2016-06", system: "myf" })
    update({ kpi: 200, month: "2016-06", system: "myf" }).then(res => {
      regionDistributed();
    })
    deletes({ month: '2016-06' }).then(res => {
      regionDistributed();
    })
  }
}
</script>

<style lang="less" scoped>
.hello {
  color: red;
}
</style>

