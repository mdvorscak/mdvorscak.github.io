<template lang="pug">
  div.gh-profile-container
    img.avatar(:src="user.avatar_url" alt="profile picture")
    h3.gh-user-name(v-text="user.name")
    div.gh-links-container
      a.gh-link-container(:href="user.repos_url")
        div(v-text="user.public_repos")
        div.gh-link-descriptor Repositories
      a.gh-link-container(:href="user.gists_url")
        div(v-text="user.public_gists")
        div.gh-link-descriptor Gists
      a.gh-link-container(:href="user.followers_url")
        div(v-text="user.followers")
        div.gh-link-descriptor Followers
</template>

<script type="text/javascript">
import getUserInfo from './getUserInfo';
import globals from '../../globals';

export default {
  data() {
    return {
      user: {
        avatar_url: '/static/user_profile_fallback.png',
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
  },
  props: {
    userId: {
      type: String,
      required: true
    }
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