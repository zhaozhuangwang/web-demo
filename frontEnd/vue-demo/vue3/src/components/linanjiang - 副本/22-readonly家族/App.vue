<template>
  <div>
    <p>{{state.name}}</p>
    <p>{{state.attr.age}}</p>
    <p>{{state.attr.height}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>

  /*
  1.readonly
  - 只读数据

  2.readonly和const
  - const    赋值保护
  - readonly 递归保护

  3.isReadonly
  - 判断是否是readonly

  4.shallowReadonly
  - 非递归保护
  * */
  import {readonly, isReadonly, shallowReadonly} from 'vue'
export default {
  name: 'App',
  setup() {
    // readonly:用于创建一个只读的数据, 并且是递归只读
    let state = readonly({name:'lnj', attr:{age:18, height: 1.88}});
    // shallowReadonly: 用于创建一个只读的数据, 但是不是递归只读的
    // let state = shallowReadonly({name:'lnj', attr:{age:18, height: 1.88}});
    // const和readonly区别:
    // const: 赋值保护, 不能给变量重新赋值
    // readonly: 属性保护, 不能给属性重新赋值
    // const value = 123;
    const value = {name:'zs', age:123};
    function myFn() {
      state.name = '知播渔';
      state.attr.age = 666;
      state.attr.height = 1.66;
      console.log(state);
      console.log(isReadonly(state));
      // value = 456;
      // console.log(value);
      value.name = 'ls';
      value.age = 456;
      console.log(value);
    }
    return {state, myFn};
  }
}
</script>

<style>

</style>
