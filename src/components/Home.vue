<template>
    <div class="home image-container">
        <img src="/static/home_background.jpg">
        <h3>Hi, I'm Mike. I am a User Experience Architect from Chicago.</h3>
    </div>
</template>

<script type="text/javascript">

export default {
};
</script>
<style>
.home img{
  max-width: 100%;
  height: auto;
  width: auto;
  display: block;
  margin: 0 auto;
}
.image-container{
  position: relative; 
  width: 100%;
  display: block;
  margin: 0 auto;
}
.home h3{
  position: absolute; 
  bottom: 30%; 
  left: 0; 
  width: 100%; 
  text-align: center;
  background: white;
  padding: 11px;
  font-size: 3vw;
}
@media (min-width: 1400px) { 
  .home h3{
    font-size: 42px; /* 1400 * 3vw (1400 * .03) */
  }
}
</style>