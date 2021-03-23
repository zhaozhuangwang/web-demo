declare global {
    interface Window {
        AMapUI: any,
        PathSimplifier:any,
        pathSimplifierIns:any,
        TMap:any,
        init:any
    }
}



// declare global {
//  export interface Window {
//     AMapUIs: any
//   }
//   export default window
// }
export { AMapUI ,pathSimplifierIns ,PathSimplifier};