<template lang="pug">
div.home
  div.fractal-container
    div(v-for="(x, index) in fractalLevels" :key="index" :class="'fractal item-' + (index + 1)")
    h3 Hi, I'm Mike. I am a User Experience Architect from Chicago.
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
@import '../common/math'
@import '../common/color-functions'
@import '../common/sizes'
@import '../common/breakpoints'

/** Since the fractals use flex, the size will be relative **/
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
      /** The first item should be the largest **/
      flex-grow 10 - i
.home 
  position relative
  h3
    box-shadow: 2vw 2vh 11px 0px rgba(0,0,0,.5);
    position absolute
    bottom 30%
    left 0
    width 100%
    text-align center
    background #FFF
    padding standard-space 0
    font-size 3vw

@media (min-width: extra-large-width)
  .home h3
    font-size extra-large-width * .03
</style>