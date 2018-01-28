<template>
  <div id="app">
    <navBar></navBar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    navBar
  }
};
</script>

<style lang="stylus">
#content
  margin 0 auto
  width 75vw

html
  font-family 'Roboto', 'Droid Sans', 'Open Sans', sans-serif
  font-weight normal
  color rgba(0, 0, 0, 0.87)

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