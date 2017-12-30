import gh from './gitHubApiWrapper';

async function getRepoInfo(userId) {
  const response = await gh.getUser(userId).listRepos();
  const allRepos = response.data;
  return name => (allRepos.find(el => el.name === name));
}

export default getRepoInfo;
