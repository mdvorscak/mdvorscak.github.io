<template>
    <div class="home">
        <div class="fractal-container">
          <div v-for="(x, index) in fractalLevels" v-bind:key="index" :class="'fractal item-' + (index + 1)"></div> 
        </div>
        <h3>Hi, I'm Mike. I am a User Experience Architect from Chicago.</h3>
    </div>
</template>

<script type="text/javascript">


export default {
  data() {
    return {
      fractalLevels: 10
    };
  }
};
</script>
<style lang="stylus">
/** Math functions and constants **/
sqrt(x)
  return math(x, 'sqrt')
naturalSeries(n)
  return (n * (n + 1))/2
golden-ratio = (1 + sqrt(5)) / 2

/** Color functions **/
random(min, max)
  return floor( math(0, "random") * max + min )
randomColorChannel()
  return random(0, 255)
randomColor()
  return rgba(randomColorChannel(), randomColorChannel(), randomColorChannel(), .5)

body-height = calc(100vh - 60px)

x = 100% / (naturalSeries(10) * golden-ratio)
fractalSizing(level) 
  return (10 - level) * x 

.fractal-container
  display flex
.fractal
  height body-height
  box-shadow: 4px 0px 11px 0px rgba(0,0,0,.5)
  display inline-flex

  for i in (1..10)
    &.item-{i}
      width fractalSizing(i)
      background-color randomColor()
      flex-grow 10 - i
.home 
  position relative
  height body-height
  img
    max-width 100%
    height auto
    width auto
    display block
    margin 0 auto
  &.image-container
    position relative
    width 100%
    display block
    margin 0 auto
  h3
    box-shadow: 2vw 2vh 11px 0px rgba(0,0,0,.5);
    position absolute
    bottom 30%
    left 0
    width calc(75vw - 22px)
    text-align center
    background white
    padding 11px
    font-size 3vw

@media (min-width: 1400px)
  .home h3
    font-size 42px /* 1400 * 3vw (1400 * .03) */
</style>