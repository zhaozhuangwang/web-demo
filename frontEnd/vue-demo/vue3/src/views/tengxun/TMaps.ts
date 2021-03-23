export function TMaps(key:any) {
    return new Promise(function (resolve, reject) {
        console.log(window,'window')
            window.init = function (TMap:any) {
                console.log(TMap,'val')
            resolve(TMap)//注意这里
    }
    console.log(key,'key')
    const script = document.createElement("script");
    script.charset = "utf-8";
    // script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+key;
    script.src = "https://map.qq.com/api/gljs?v=1.exp&callback=init&key="+key;
    document.head.appendChild(script);
    script.onerror = reject;
    })
}