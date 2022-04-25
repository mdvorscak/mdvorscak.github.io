<template lang="pug">
div
  gh-profile(user-id="mdvorscak")
  div(v-for="(repo, index) in repos" :key="index")
    gh-repo(:repo="repo")
</template>

<script type="text/javascript">
import GitHubProfile from './github/GitHubProfile.vue';
import GitHubRepo from './github/GitHubRepo.vue';
import getRepoInfoFactory from './github/getRepoInfo.js';
import globals from '../globals.js';

const loadingRepo = {
  name: globals.loadingText,
  description: 'Please wait while this repository loads',
  language: globals.loadingText,
  watchers_count: globals.loadingNumber,
  stargazers_count: globals.loadingNumber,
  forks: globals.loadingNumber,
  homepage: null
};

export default {
  data() {
    return {
      repos: [
        loadingRepo,
        loadingRepo,
        loadingRepo,
        loadingRepo,
        loadingRepo
      ]
    };
  },
  async created() {
    const repoList = ['mdvorscak.github.io', 'memoryMatchGame',
      'metalsmith-browser-sync', 'validate-params',
      'jasmine-ts-async', 'cloakjs', 'ls-map-wrap'];
    const getRepoInfo = await getRepoInfoFactory('mdvorscak');
    this.repos = repoList.map(repo => getRepoInfo(repo));
  },
  components: {
    'gh-profile': GitHubProfile,
    'gh-repo': GitHubRepo
  }
};
</script>
<style>
</style>