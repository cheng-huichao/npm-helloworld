<template>
    <div>
        <button @click.prevent="clickHandler" :class="myClass">
            <slot>hc button</slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'HcButton',
    props: {
        myClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: {
        clickHandler(e) {
            alert(e.target.tagName);
            alert(e.target.value);
        }
    }
}
</script>

<style scoped>

</style>
