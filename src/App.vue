<template lang="pug">
div#app
  navBar
  div#content
    router-view
</template>

<script>
import navBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    navBar
  }
};
</script>

<style lang="stylus">
@import 'common/sizes'
@import 'common/theme'

#content
  margin 0 auto
  width content-width

html
  font-family 'Roboto', 'Droid Sans', 'Open Sans', sans-serif
  font-weight normal
  color theme-black

body
  margin 0

a
  text-decoration none
  -webkit-tap-highlight-color transparent
  background-color transparent

img
  border 0

*, *:before, *:after
  -webkit-box-sizing inherit
  box-sizing inherit
</style>