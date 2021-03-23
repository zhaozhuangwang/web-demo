/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare global {
//  export interface Window {
//     AMapUIs: any
//   }
//   export default window
// }
declare global  {
  export interface Window {
    AMapUIs: any
  }
}