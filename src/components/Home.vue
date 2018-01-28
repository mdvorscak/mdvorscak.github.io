<template>
    <div class="home image-container">
        <img srcset="/static/home_background_512.jpg 512w,
                /static/home_background.jpg 1028w "
        sizes="(max-width: 512px) 512px,
                1028px"
        src="/static/home_background.jpg" alt="Sunrise New Year's 2017">
        <h3>Hi, I'm Mike. I am a User Experience Architect from Chicago.</h3>
    </div>
</template>

<script type="text/javascript">
export default {};
</script>
<style lang="stylus">
.home 
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