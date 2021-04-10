import HelloWorld from "./HelloWorld.vue";

export default {
    install(Vue) {
        Vue.component('hello-world', HelloWorld);
    }
};
