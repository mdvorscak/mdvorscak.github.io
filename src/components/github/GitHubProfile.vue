<template>
    <div class="gh-profile-container">
        <img class="avatar" :src="user.avatar_url" alt="profile picture">
        <h3 class="gh-user-name" v-text="user.name"></h3>
        <div class="gh-links-container">
          <a class="gh-link-container" :href="user.repos_url">
            <div v-text="user.public_repos"></div>
            <div class="gh-link-descriptor">Repositories</div>
          </a>
          <a class="gh-link-container" :href="user.gists_url">
            <div v-text="user.public_gists"></div>
            <div class="gh-link-descriptor">Gists</div>
          </a>
          <a class="gh-link-container" :href="user.followers_url">
            <div v-text="user.followers"></div>
            <div class="gh-link-descriptor">Followers</div>
          </a>
        </div>
    </div>
</template>

<script type="text/javascript">
import getUserInfo from './getUserInfo';

export default {
  data() {
    return { 
      user: { },
      loading: true //TODO: skeleton loading
    };
  },
  created() {
    getUserInfo(this.userId).then(user => {
      this.user = user;
      this.loading = false;
    });  
  },
  props: {
    userId: {
      type: String,
      required: true
    }
  }
};
</script>
<style>
.gh-profile-container{
    background-color: #f2f2f2;
    border-radius: 0 0 6px 6px;
    border: .5px solid #e5e5e5;
    color: #333;
}
.gh-profile-container a{
  color: #333;
}
.avatar {
  margin: 0 auto;
  display: block;
  border-radius: 50%;
  max-width: 100%;
  height: auto;
  width: auto;
}
.gh-user-name{
  text-align: center;
}
.gh-links-container{
  display: flex;
  text-align: center;
}
.gh-link-container{
  flex-grow: 1;
  border: .5px solid #9e9e9e;
  border-right: 0;
}
.gh-link-container:last-child{
  border-right: .5px solid #9e9e9e;
  border-bottom-right-radius: 6px;
}
.gh-link-container:first-child{
  border-bottom-left-radius: 6px;
}
a.gh-link-container:hover{
  background-color: #d1d1d1;
}
</style>