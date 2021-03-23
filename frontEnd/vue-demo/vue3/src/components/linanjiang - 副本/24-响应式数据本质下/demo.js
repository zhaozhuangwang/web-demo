/*
1.Proxy注意点
- set方法必须通过返回值告诉Proxy此次操作是否成功
* */
// let obj = {name:'lnj', age:18};
let arr = [1, 3, 5]; // [1, 3, 5, 7]
let state = new Proxy(arr, {
    get(obj, key){
        console.log(obj, key); // [ 1, 3, 5 ] 1
        return obj[key];
    },
    set(obj, key, value){
        // [ 1, 3, 5 ] 3 7
        // [ 1, 3, 5, 7 ] length 4
        console.log(obj, key, value);
        obj[key] = value;
        console.log('更新UI界面');
        return true;
    }
});

// console.log(state[1]);
state.push(7);
