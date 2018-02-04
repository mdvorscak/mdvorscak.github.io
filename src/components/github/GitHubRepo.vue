<template lang="pug">
mixin text-block(text)
  div(class!= attributes.class)
    span.text-holder-wrapper(v-text!= text)
mixin stat(text, d)
  svg.octicon(aria-hidden="true")
    path(fill-rule="evenodd" d!= d)
  p(v-text!= text)
a.repo-item(:href="repo.html_url")
  div.repo-content
    +text-block("repo.name")(class="repo-title")
    div.repo-homepage(v-if="repo.homepage") Project site: 
      a(:href="repo.homepage" v-text="repo.homepage")
    +text-block("repo.description")(class="repo-desc")
    div.repo-info
      +text-block("repo.language")(class="repo-language")
      div.repo-stats
        +stat("repo.watchers_count", `M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 
                              0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 
                              2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z`)
        +stat("repo.stargazers_count", "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z")
        +stat("repo.forks", `M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 
                              0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 
                              1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 
                              1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 
                              1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z`)
</template>

<script type="text/javascript">
export default {
  props: {
    repo: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="stylus">
@import '../../common/theme'
@import '../../common/sizes'
@import 'gh'

repo-item-gray = #5c6877
.repo-item
  border-radius gh-radius
  border gh-border
  margin standard-space 0
  display block
  overflow hidden
  color repo-item-gray
  svg
    fill repo-item-gray

.repo-content
  padding 15px
  background-color theme-light-gray
  .repo-title
    font-size 18px
  .repo-desc, .repo-homepage, .repo-language
    font-size 14px
    word-wrap break-word
  .repo-desc, .repo-homepage
    margin-top 5px
  .repo-info
    display -ms-flexbox
    display flex
    -ms-flex-pack justify
    justify-content space-between
    margin-top 15px

.text-holder-wrapper
  display block

.repo-stats
  display inline-flex
  p
    margin 0 15px

.octicon
  width 16px
  height 16px
</style>