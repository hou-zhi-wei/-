import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countIndex:0,
    listData:[],
    filtertype:"",
    list:""
  },
  mutations: {
    setState(state,payload){
      state[payload.key]=payload.value
    }
  },
  getters:{
    filterList(state){
      if(state.filtertype==="" && state.list===""){
        return state.listData
      }else if(state.filtertype===""){
          return state.listData.filter((item=>item.title.includes(state.list)))
      }
      else{
        return state.listData.filter(item=>item.type===state.filtertype&&item.title.includes(state.list))
      }
    }
  },
  actions: {
    getList({commit}){
      axios.get("/api/list").then((res)=>{
        console.log(res.data)
        commit({type:"setState",key:"listData",value:res.data})
      })
    }
  },
  modules: {
  }
})
