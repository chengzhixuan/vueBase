import { createApp } from 'vue';
import 'element-plus/dist/index.css'; // 引用ele的css基础样式
import App from './App.vue';
import router from './router'; // 挂载路由
import { createPinia } from 'pinia'; // 挂载pinia
import ElementPlus from 'element-plus'; // 挂载ele
import locale from 'element-plus/lib/locale/lang/zh-cn'; // 引用ele中文包
import { Container } from '@/components/public'; // 引用组件
const app = createApp(App).use(router).use(ElementPlus, { locale }).use(createPinia());
app.component('Container', Container); // 注册全局组件
app.mount('#app')