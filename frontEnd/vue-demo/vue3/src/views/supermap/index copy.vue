<template>
    <div>
       <div id="map" style="margin:0 auto;width: 100%;height: 100%"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import L from 'leaflet';
import '@supermap/iclient-leaflet';
import Vue from 'vue'
export default defineComponent({
        name:'supermap',
        setup(){
            let map = reactive<any>({});
            function getdata() {
                const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
                 map = L.map('map', {
                    crs: L.CRS.EPSG4326,
                    center: [0, 0],
                    maxZoom: 18,
                    zoom: 1
                });
                L.supermap.tiledMapLayer(url).addTo(map);
            }
        }
})  
</script>