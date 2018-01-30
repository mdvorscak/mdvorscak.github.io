<template>
    <div class="home">
        <div v-for="(x, index) in fractalLevels" v-bind:key="index" :class="'fractal item-' + (index + 1)"></div> 
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


body-height = calc(100vh - 60px)

fractal-size = 75vw
fractalSizing(level) 
  return fractal-size/(level * 3)

.fractal
  height body-height
  border-right 1px solid #333
  display inline-block
  &:nth-child(1)
    border-left 1px solid #333

  for i in (1..10)
    &.item-{i}
      width w = fractalSizing(i)
      background-color randomColor()
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