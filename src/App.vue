<template lang="pug">
  #app
    router-view
</template>

<script>
import db_fb from './assets/js/firebase'
export default {
  name: 'App',
  mounted() {
    console.log(db_fb.get_categorias())
    console.log(db_fb.set_categoria("C#"))
  }
}

</script>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
