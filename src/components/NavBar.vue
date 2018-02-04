<template lang="pug">
mixin nav-route-link(path, name)
  li: router-link(to!= path)= name
mixin nav-link(href, name)
  li: a(href!= href)= name
div.navbar-fixed
  nav
    div.nav-wrapper
      ul
        +nav-route-link("/", "Home")
        +nav-route-link("/resume", "Resume")
        +nav-route-link("/projects", "Projects")
        +nav-link("mailto:mike.dvorscak@gmail.com", "Contact Me")
</template>

<script type="text/javascript">
export default {
  name: 'navBar'
};
</script>
<style lang="stylus">
@import '../common/theme'
@import '../common/sizes'
@import '../common/breakpoints'
@import '../common/mixins'

nav-height = 56px
.navbar-fixed
  position relative
  height nav-height
  z-index 997
  nav
    position fixed

nav
  color #FFF
  width 100%
  background-color theme-green
  height nav-height
  line-height nav-height
  box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14) , 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)
  display block

.nav-wrapper
  margin 0 auto
  display block
  width content-width
  ul
    display inline-flex
    height 100%
    flex-direction row
    padding-left 0
    list-style-type none
    margin 0
    li
      list-style-type none
      float left
      padding 0
    a
      hover-effect()
      color #fff
      display block
      padding 0 15px
      cursor pointer
      font-size 3vw
  
@media (min-width: ipad-width)
  .nav-wrapper ul a
    font-size ipad-width * .03 

@media (max-width: phone-width)
  .nav-wrapper ul a
    font-size 2.4vw
</style>