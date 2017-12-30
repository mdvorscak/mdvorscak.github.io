import gh from './gitHubApiWrapper';

async function getUserInfo(userId) {
  const response = await gh.getUser(userId).getProfile();
  const user = response.data;
  const baseUrl = user.html_url;
  const tabUrl = `${baseUrl}?tab=`;
  user.repos_url = `${tabUrl}repositories`;
  user.gists_url = `https://gist.github.com/${userId}`;
  user.followers_url = `${tabUrl}followers`;
  return user;
}

export default getUserInfo;
