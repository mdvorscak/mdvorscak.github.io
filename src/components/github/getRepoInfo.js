import MemoizedGitHubUserWrapper from './MemoizedGitHubUserWrapper';

async function getRepoInfo(userId) {
  const ghUser = MemoizedGitHubUserWrapper(userId);
  const response = await ghUser.listRepos();
  const allRepos = response.data;
  return name => (allRepos.find(el => el.name === name));
}

export default getRepoInfo;
