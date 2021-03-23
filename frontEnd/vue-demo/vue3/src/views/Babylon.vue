
<template>
  <div>
      <div id="container" style="height: 800px;width: 100%"></div>
  </div>
</template>
<script>
import mock from '@/mock/gaode'
import AMapLoader from '@amap/amap-jsapi-loader';
import axios from "axios";
export default {
  data() {
    return {
        map:'',
      facility: [
        {
          searchValue: null,
          createBy: null,
          createTime: "2020-11-28 09:17:08",
          updateBy: null,
          updateTime: "2021-01-13 03:20:00",
          remark: null,
          beginTime: null,
          endTime: null,
          params: {},
          id: "0",
          cameraCode: "13073320001319000075",
          cameraName: "0号杆枪机",
          lat: 38.041353,
          lng: 114.48718,
          ip: "13.145.169.75",
          port: 80,
          cameraType: 0,
          brandType: 1,
          orderNumber: null,
          deptId: null,
          serverId: "12d5244a9465470a9e74cb7ad1d35ff6",
          status: 1,
        },
      ],
    };
  },
  mounted() {
    this.login();
    this.list();
    this.datas()
    
  },
  methods: {
    datas() {
      AMapLoader.load({
            "key": "e02274b44f678ec29aa01e6e3a65cbf1",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            },
        }).then((AMap)=>{
            // console.log(AMap,'ss')
            // map = new AMap.Map('container');
                var satellite = new AMap.TileLayer.Satellite();
                var roadNet = new AMap.TileLayer.RoadNet();
                this.map = new AMap.Map('container', {
                zoom:11, 
                layers:[
                    satellite,
                    roadNet
                ],                                       //级别
                center: [114.487633,38.034273],                 //中心点坐标
                viewMode:'3D'                                   //使用3D视图
            });
            this.setMapMarker()
        }).catch(e => {
            console.log(e);
        })
    },
    async  setMapMarker(){
        let getData=await this.list()
        console.log(getData,'getData')

        if (getData.list && getData.list.length) {
            getData.list.map(item=>{
                item.marker= new AMap.Marker({
                    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                    position: [item.lngs,item.lats]
                });
                item.circle=new AMap.Circle({
                    center: new AMap.LngLat(item.lngs,item.lats), // 圆心位置
                    radius: 1000,  //半径
                    strokeColor: "#F33",  //线颜色
                    strokeOpacity: 1,  //线透明度
                    strokeWeight: 3,  //线粗细度
                    fillColor: "#ee2200",  //填充颜色
                    fillOpacity: 0.35 //填充透明度
                });
                this.map.add([item.marker,item.circle]);
            })
            
        }
           
            
            //  // 构造点标记
            // let marker = new AMap.Marker({
            //     icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            //     position: [114.487633,38.034273]
            // });
            // // 构造矢量圆形
            // let circle = new AMap.Circle({
            //     center: new AMap.LngLat("114.487633", "38.034273"), // 圆心位置
            //     radius: 1000,  //半径
            //     strokeColor: "#F33",  //线颜色
            //     strokeOpacity: 1,  //线透明度
            //     strokeWeight: 3,  //线粗细度
            //     fillColor: "#ee2200",  //填充颜色
            //     fillOpacity: 0.35 //填充透明度
            // });
    },
    login() {
      axios.post("/login").then((response) => {
        if (response.data) {
          console.log(response.data);
        }
      });
    },

    async list() {
         
     return await axios.post("/list").then((response) => {
         
        if (response.data) {
            return response.data
          console.log(response.data);
        }
      });
    },
  },
};
</script>