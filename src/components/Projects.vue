<template>
  <div>
    <gh-profile user-id="mdvorscak"></gh-profile>
    <div v-for="repo in repos">
      <gh-repo :repo="repo"></gh-repo>
    </div>
  </div>
</template>

<script type="text/javascript">
import GitHubProfile from './github/GitHubProfile';
import GitHubRepo from './github/GitHubRepo';
import getRepoInfoFactory from './github/getRepoInfo';

export default {
  data() {
    return {
      repos: [
        { },
        { },
        { },
        { },
        { }
      ],
      loading: true // TODO: Skeleton loading
    };
  },
  created() {
    getRepoInfoFactory('mdvorscak').then((getRepoInfo) => {
      this.repos = [
        getRepoInfo('mdvorscak.github.io'),
        getRepoInfo('validate-params'),
        getRepoInfo('cloakjs'),
        getRepoInfo('metalsmith-browser-sync'),
        getRepoInfo('jasmine-ts-async')
      ];
      this.loading = false;
    });
  },
  components: {
    'gh-profile': GitHubProfile,
    'gh-repo': GitHubRepo
  }
};
</script>
<style>
</style>