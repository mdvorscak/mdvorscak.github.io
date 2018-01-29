<template>
    <div class="home">
        <div class="fractal-wrapper">
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
sqrt(x)
  return math(x, 'sqrt')
sq2 = sqrt(2)

random(min, max)
  return floor( math(0, "random") * max + min )
randomColorChannel()
  return random(0, 255)
randomColor()
  return rgba(randomColorChannel(), randomColorChannel(), randomColorChannel(), .5)


fractal-size = 1000px
fractalSizing(level) 
  return fractal-size/(level)

.fractal-wrapper 
  height 100%
.fractal
  position absolute
  border 1px solid #333

  for i in (1..10)
    &.item-{i}
      width w = fractalSizing(i)
      height h = fractalSizing(i)
      left 50%
      top  50%
      border-radius unit(random(0, 6), '%')
      transform translateX(-50%) translateY(-50%) rotate(random(0, 360) deg) skew(random(0, 15) deg)
      background-color randomColor()
.home 
  position relative
  height 100vh
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
    position absolute
    bottom 30%
    left 0
    width 100%
    text-align center
    background white
    padding 11px
    font-size 3vw

@media (min-width: 1400px)
  .home h3
    font-size 42px /* 1400 * 3vw (1400 * .03) */
</style>