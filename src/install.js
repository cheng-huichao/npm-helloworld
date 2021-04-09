import HelloWorld from "./components/HelloWorld.vue";

export default {
    install(Vue, options) {
        Vue.component('hello-world', HelloWorld);
    }
};
