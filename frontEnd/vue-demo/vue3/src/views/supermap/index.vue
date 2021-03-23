<template>
    <div>
       <div id="map" style="margin:0 auto;width: 100%;height: 500px"></div>
    </div>
</template>
<script>
import L from 'leaflet';
import '@supermap/iclient-leaflet';
export default {
    data(){
        return{
            map:'',
        }
    },
    mounted(){
        this.getData()
    },
    methods:{   
        getData(){
            // const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
            // this.map = L.map('map', {
            //     crs: L.CRS.EPSG4326,
            //     preferCanvas: true,
            //     center: [0, 0],
            //     maxZoom: 18,
            //     zoom: 1
            // });
            // L.supermap.tiandituTileLayer(url).addTo(this.map);

            const host = window.isLocal ? window.server : "https://iserver.supermap.io";
            let marker;
            let featureGroup='';
            let resultLayer='';
            let featureService='';
            const  baseUrl = host + "/iserver/services/map-world/rest/maps/World", url = host + "/iserver/services/data-world/rest/data";
            this.map = L.map('map', {
                preferCanvas: true,
                crs: L.CRS.EPSG4326,
                center: {lon: 0, lat: 0},
                maxZoom: 18,
                zoom: 2
            });
            L.supermap.tiledMapLayer(baseUrl).addTo(this.map);
            featureGroup = L.featureGroup().addTo(this.map);
            featureService = L.supermap.featureService(url);
            
            
            const polygon = L.polygon([[20, 118], [20, 120], [50, 120], [50, -120], [20, 118]]);
            const getFeatureParams = new SuperMap.GetFeaturesByGeometryParameters({
                toIndex: -1,
                datasetNames: ["World:Capitals"],
                geometry: polygon
            });

            featureService.getFeaturesByGeometry(getFeatureParams, function (serviceResult) {
                resultLayer = L.geoJSON(serviceResult.result.features).addTo(this.map);
                resultLayer.on("mousemove", function (e) {
                    e.layer.bindPopup(resources.text_capital + "：" + e.layer.feature.properties.CAPITAL).openPopup();
                });
                resultLayer.on("mouseout", function (e) {
                    e.layer.closePopup();
                });
            });


            const xmax = 120, xmin = 100, ymax = 50, ymin = 20;
            let point = [];
            if (!featureGroup.hasLayer(marker)) {

                point = [
                    Math.floor(Math.random() * (ymax - ymin + 1) + ymin),
                    Math.floor(Math.random() * (xmax - xmin + 1) + xmin)
                ];
                marker = L.circleMarker(point, {color: "red"});
                featureGroup.addLayer(marker);
                featureGroup.addTo(this.map);
                this.map.flyTo(point, 5);
            } else {
                featureGroup.clearLayers();
                point = [
                    Math.floor(Math.random() * (ymax - ymin + 1) + ymin),
                    Math.floor(Math.random() * (xmax - xmin + 1) + xmin)
                ];
                marker = L.circleMarker(point, {color: "red"});
                featureGroup.addLayer(marker);
                featureGroup.addTo(this.map);
                this.map.flyTo(point, 5);
            }
        },
        
       
    }
}
</script>