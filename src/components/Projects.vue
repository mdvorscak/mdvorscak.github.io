<template>
  <div>
    <gh-profile user-id="mdvorscak"></gh-profile>
    <div v-for="(repo, index) in repos" :key="index">
      <gh-repo :repo="repo"></gh-repo>
    </div>
  </div>
</template>

<script type="text/javascript">
import GitHubProfile from './github/GitHubProfile';
import GitHubRepo from './github/GitHubRepo';
import getRepoInfoFactory from './github/getRepoInfo';
import globals from '../globals';

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
  created() {
    const repoList = ['mdvorscak.github.io', 'memoryMatchGame',
      'metalsmith-browser-sync', 'validate-params',
      'jasmine-ts-async', 'cloakjs', 'ls-map-wrap'];
    getRepoInfoFactory('mdvorscak').then((getRepoInfo) => {
      this.repos = repoList.map(repo => getRepoInfo(repo));
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