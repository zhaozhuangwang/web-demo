<template>
  <div>
    <div id="container" style="height: 800px; width: 100%"></div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import axios from "axios";
interface Book {
  title: string;
  year?: number;
}
export default defineComponent({
  name: "amap",
  setup() {
    const book = reactive<Book>({ title: "Vue 3 Guide" });
    let map = reactive<any>({ title: "Vue 3 Guide" });
    let AMapUIs = reactive({}) as any;
    const colors = [
      "#3366cc",
      "#dc3912",
      "#ff9900",
      "#109618",
      "#990099",
      "#0099c6",
      "#dd4477",
      "#66aa00",
      "#b82e2e",
      "#316395",
      "#994499",
      "#22aa99",
      "#aaaa11",
      "#6633cc",
      "#e67300",
      "#8b0707",
      "#651067",
      "#329262",
      "#5574a6",
      "#3b3eac",
    ];
    // or
    // const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    // const book = reactive({ title: 'Vue 3 Guide' }) as Book

    async function listData() {
      return await axios.post("/list").then((response) => {
        console.log(response.data);
        if (response.data) {
          return response.data;
        }
      });
    }
    async function setMapMarker(AMap: any) {
      const getData = await listData();
      console.log(getData, "getData");

      if (getData.list && getData.list.length) {
        getData.list.map((item: any) => {
          item.marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [item.lngs, item.lats],
          });
          item.circle = new AMap.Circle({
            center: new AMap.LngLat(item.lngs, item.lats), // 圆心位置
            radius: 1000, //半径
            strokeColor: "#F33", //线颜色
            strokeOpacity: 1, //线透明度
            strokeWeight: 3, //线粗细度
            fillColor: "#ee2200", //填充颜色
            fillOpacity: 0.35, //填充透明度
          });
          const toolbar = new AMap.ToolBar();

          map.addControl(toolbar);
          map.add([item.marker, item.circle]);
        });
      }
    }
    async function loadData(AMap:any) {
      const getData = await listData();
      console.log(getData, "getData");
      AMapUIs.load(
        ["ui/misc/PointSimplifier", "lib/$"],
        (PointSimplifier: any, $: any) => {
             const satellite = new AMap.TileLayer.Satellite();
          const roadNet = new AMap.TileLayer.RoadNet();
            map = new AMap.Map('container', {
                layers: [satellite, roadNet], //级别
              //  pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度
                // viewMode:'3D', // 地图模式
                // zooms: [18, 18], // 地图缩放范围
                zoom: 10,
                //  center: [114.487633, 38.034273], //中心点坐标
                 center:[116.397428, 39.90923]
            })
          console.log(PointSimplifier,'PointSimplifier')
            // 创建组件实例
        const pointSimplifier = new PointSimplifier({
          map: map,
          // data是海量点的坐标，下面是随机产生点坐标的方法
          data: (() => {
            const data = []
            for (let i = 0, len = 152220; i < len; i++) {
              data.push({
                position: [
                  map.getCenter().getLng() + (Math.random() > 0.5 ? 2 : -2) * Math.random(),
                  map.getCenter().getLat() + (Math.random() > 0.5 ? 2 : -2) * Math.random()
                ]
              })
            }
            return data
          })(),
          // 返回要显示的点坐标
          getPosition: (dataItem:any) => {
            return dataItem.position
          },
          renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
          renderOptions: {
            pointStyle: {
              fillStyle: 'red'
            },
            //将经纬度进行分组
            getGroupId: function(item:any, idx:any) {
              // 分组规则
              // 这里会遍历每个数据
              // 根据每个数据的参数进行分组
              // 下面的判断是根据参数的下标进行分组
              if (idx < 250) {
                return 'g0'
              } else {
                return 'g1'
              }
            },
            // 为每组添加样式（两种方法）
            // 方法一
            groupStyleOptions: {
              g0: {
                pointStyle: {
                  fillStyle: 'red'
                }
              },
              g1: {
                pointStyle: {
                  fillStyle: 'blue'
                }
              }
            },
            // 方法二
            // groupStyleOptions: function(gid) {
            //   if (gid === 'g0') {
            //     return {
            //       pointStyle: {
            //         fillStyle: 'red'
            //       }
            //     }
            //   } else {
            //     return {
            //       pointStyle: {
            //         fillStyle: 'blue'
            //       }
            //     }
            //   }
            // }
          }
        })
        // 为海量点添加点击事件
        pointSimplifier.on('pointClick', (data:any) => {
          console.log(data,999)
        })
  

        }
      );
    }
    function datas() {
      AMapLoader.load({
        key: "e02274b44f678ec29aa01e6e3a65cbf1", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.ToolBar", "AMap.Scale"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        AMapUI: {
          // 是否加载 AMapUI，缺省不加载
          version: "1.1", // AMapUI 缺省 1.1
          plugins: [], // 需要加载的 AMapUI ui插件
        },
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: "1.3.2", // Loca 版本，缺省 1.3.2
        },
      })
        .then((AMap) => {
          console.log(AMap, "ss");

          map = new AMap.Map('container');
          const satellite = new AMap.TileLayer.Satellite();
          const roadNet = new AMap.TileLayer.RoadNet();

          map = new AMap.Map("container", {
            zoom: 8,
            layers: [satellite, roadNet], //级别
            center: [114.487633, 38.034273], //中心点坐标
            viewMode: "3D", //使用3D视图
          });
          AMapUIs = window.AMapUI;
          setMapMarker(AMap);
          // loadData(AMap);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    datas();
    // loadData()
    return { book, datas, listData, setMapMarker, map, loadData };
  },
});
</script>