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
import { regionDistributed } from '@/api/interface';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    regionDistributed().then(res => {

    })
  }
}
</script>

<style lang="less" scoped>
.hello {
    color: red;
}
</style>

