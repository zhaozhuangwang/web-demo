/*
1.Vue3响应式数据本质
- 在Vue2.x中是通过defineProperty来实现响应式数据的
  详见: 手写Vue全家桶视频
- 在Vue3.x中是通过Proxy来实现响应式数据的
* */
let obj = {name:'lnj', age:18};
let state = new Proxy(obj, {
    get(obj, key){
        console.log(obj, key); // { name: 'lnj', age: 18 } name
        return obj[key];
    },
    set(obj, key, value){
        console.log(obj, key, value); // { name: 'lnj', age: 18 } name 知播渔
        obj[key] = value;
        console.log('更新UI界面');
    }
});

// console.log(state.name); // lnj
state.name = '知播渔';
console.log(state);
