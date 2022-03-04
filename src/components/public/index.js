import { defineAsyncComponent } from 'vue';
const Container = defineAsyncComponent(() =>
    import ( /* webpackChunkName: "container" */ './container.vue'));
export { Container };