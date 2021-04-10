<template>
    <div>
        <button @click.prevent="clickHandler" :class="myClass">
            <slot>Click Me</slot>
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
            alert('TagName: ' + e.target.tagName);
            alert('Text: ' + e.target.innerText);
        }
    }
}
</script>
