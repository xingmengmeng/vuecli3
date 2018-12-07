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
import { regionDistributed, list } from '@/api/interface';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    regionDistributed({ id: 3 }).then(res => {
      console.log(1)
    })
    list({ id: 3, name: 'vivian' });
  }
}
</script>

<style lang="less" scoped>
.hello {
  color: red;
}
</style>

