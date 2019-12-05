<template>
  <div class="home">
    <div class="shang">
      <span v-for="(item,index) in NavList" :key="index" :class="{active:countIndex===index}" @click="tapClick(item.type,index)">
        {{item.title}}
      </span>
      <input type="text" placeholder="搜索" v-model="text" @input="clickinput">
    </div>
    
     <div v-for="(item,index) in listData" :key="index">
        <list :item="item" />
    </div>
  </div>
</template>

<script>
import list from "../components/list"
export default {
  name: "home",
  components: {
    list
  },
  data() {
    return {
      NavList: [
        {
          title: "全部任务",
          type:""
        },
        {
          title: "进行中任务",
          type:"pending"
        },
        {
          title: "强制终止任务",
          type:"reject"
        },
        {
          title: "已完成任务",
          type:"fullfilled"
        }
      ],
      text:""
    };
  },
  computed: {
    countIndex(){
      return this.$store.state.countIndex
    },
    listData(){
      return this.$store.getters.filterList
    }
  },
  methods: {
    tapClick(type,index){
      this.$store.commit({type:"setState",key:"countIndex",value:index}),
      this.$store.commit({type:"setState",key:"filtertype",value:type})
    },
    clickinput(e){
      this.$store.commit({type:"setState",key:"list",value:e.target.value})
    }
  },
  created() {
   this.$store.dispatch({type:"getList"})
  },
};
</script>
<style lang="scss">
    .home{
      width: 100%;
      height: 100%;
    }
    span{
      width: 20%;
      height: 50px;
      display: inline-block;
      text-align: center;
      line-height: 50px;
    }
    .active{
      background: #f00;
    }
</style>