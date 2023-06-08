/*
 * @Date: 2023-06-08 22:51:05
 * @LastEditors: gong wei
 * @LastEditTime: 2023-06-08 22:51:11
 * @FilePath: /vite-vue-ts-seed/src/typings.d.ts
 * @Description:
 */
//声明window上自定义属性，如事件总线
declare interface Window {
  eventBus: any;
}

//声明.vue文件
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
