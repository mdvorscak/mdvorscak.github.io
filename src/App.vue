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

<style>
#content {
  margin: 0 auto;
  width: 75vw;
}
</style>