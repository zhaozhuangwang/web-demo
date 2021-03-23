/*
1.shallowReactive, shallowRef
2.shallowReadonly
3.reactive, ref
4.readonly
* */

function shallowRef(val) {
    return shallowReactive({value:val});
}

function shallowReactive(obj) {
    return new Proxy(obj, {
        get(obj, key){
            return obj[key];
        },
        set(obj, key, val){
            obj[key] = val;
            console.log('更新UI界面');
            return true;
        }
    })
}
let obj = {
    a:'a',
    gf:{
        b:'b',
        f:{
            c:'c',
            s:{
                d:'d'
            }
        }
    }
};
/*
let state = shallowReactive(obj);

// state.a = '1';
state.gf.b = '2';
state.gf.f.c = '3';
state.gf.f.s.d = '4';
 */
let state = shallowRef(obj);

// state.value.a = '1';
// state.value.gf.b = '2';
// state.value.gf.f.c = '3';
// state.value.gf.f.s.d = '4';
state.value = {
    a:1,
    gf:{
        b:2,
        f:{
            c:3,
            s:{
                d:4
            }
        }
    }
}


