<template>
  <div class="hello">
      hello
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
.hello{
    border: 1px solid red;
    color: red;
    padding:5px 10px;
}
</style>
