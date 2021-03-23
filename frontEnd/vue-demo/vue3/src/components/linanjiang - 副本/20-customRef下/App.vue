<template>
  <ul>
    <li v-for="item in state" :key="item.id">{{item.name}}</li>
  </ul>
</template>

<script>
  /*
  1.customRef
  返回一个ref对象,可以显式地控制依赖追踪和触发响应
  * */
  import {ref, customRef} from 'vue';

function myRef(value) {
  return customRef((track, trigger)=>{
    fetch(value)
            .then((res)=>{
              return res.json();
            })
            .then((data)=>{
              console.log(data);
              value = data;
              trigger();
            })
            .catch((err)=>{
              console.log(err);
            })
    return {
      get(){
        track(); // 告诉Vue这个数据是需要追踪变化的
        console.log('get', value)
        // 注意点:
        // 不能在get方法中发送网络请求
        // 渲染界面 -> 调用get -> 发送网络请求
        // 保存数据 -> 更新界面 -> 调用get
        return value;
      },
      set(newValue){
        console.log('set', newValue);
        value = newValue;
        trigger(); // 告诉Vue触发界面更新
      }
    }
  });
}

export default {
  name: 'App',
  // setup函数: 只能是一个同步的函数, 不能是一个异步的函数
  setup() {
    /*
    let state = ref([]);
    fetch('../public/data.json')
            .then((res)=>{
              return res.json();
            })
            .then((data)=>{
              console.log(data);
              state.value = data;
            })
            .catch((err)=>{
              console.log(err);
            })
     */
    let state = myRef('../public/data.json');
    return {state};
  }
}
</script>

<style>

</style>
