<template>
  <div>
    <div class="left"></div>
    <div class="center">
      {{item.title}}
      {{item.name}}
      <work :item="item.stat"/>
    </div>
    <div class="right">{{item.class===1 ?'日常工作':(item.class===2 ? '专项工作' : "临时工作") }}</div>
  </div>
</template>

<script>
import work from "./work"
export default {
  props: ["item"],
  components: {
    work
  }
};
</script>

<style lang="scss" scoped>
</style>