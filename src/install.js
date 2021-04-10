import HelloWorld from "./HelloWorld.vue";
import HcButton from "./hc-button.vue"
import Vue from "vue"


const Components = {
    HelloWorld,
    HcButton,
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
