<template>
    <div id="container">
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
    setup(){
        function datas() {
                console.log(window.TMap,'s')
        }
        datas()
        return {datas}
    }
})
</script>
<style>
#container {
    width:600px;
    height:767px;
}
</style>