<template lang="pug">
mixin link(text)
  a.gh-link-container(:href!= attributes.href) 
    div(v-text!= attributes.number)
    div.gh-link-descriptor= text
div.gh-profile-container
  img.avatar(:src="user.avatar_url" alt="profile picture")
  h3.gh-user-name(v-text="user.name")
  div.gh-links-container
    +link('Repositories')(href="user.repos_url" number="user.public_repos")
    +link('Gists')(href="user.gists_url" number="user.public_gists")
    +link('Followers')(href="user.followers_url" number="user.followers")
</template>

<script type="text/javascript">
import getUserInfo from './getUserInfo';
import globals from '../../globals';
import avatarFallback from '@/../static/user_profile_fallback.png';

export default {
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {
        avatar_url: avatarFallback,
        name: 'Github User',
        public_repos: globals.loadingNumber,
        public_gists: globals.loadingNumber,
        followers: globals.loadingNumber
      }
    };
  },
  async created() {
    const user = await getUserInfo(this.userId);
    this.user = user;
  }
};
</script>
<style lang="stylus">
@import '../../common/theme'
@import '../../common/mixins'
@import 'gh'

dark-border = .5px solid #9e9e9e
.gh-profile-container
  background-color theme-light-gray
  border-radius 0 0 gh-radius gh-radius
  border gh-border
  color theme-black
  a
    color theme-black
    padding 7px 0

.avatar
  margin 0 auto
  display block
  border-radius 50%
  max-width 100%
  height auto
  width auto

.gh-user-name
  text-align center

.gh-links-container
  display flex
  text-align center

.gh-link-container
  flex-grow 1
  border dark-border
  border-right 0
  hover-effect()
  &:last-child
    border-right dark-border
    border-bottom-right-radius gh-radius
  &:first-child
    border-bottom-left-radius gh-radius
</style>