import GitHub from 'github-api';
import mem from 'mem';
import lsMap from './localStorageMapWrapper';

const memoizeOptions = {
  maxAge: 1000 * 60 * 60, // 1 hour
  cache: lsMap
};

class MemoizedGitHubUserWrapper {
  constructor(userId) {
    this.userId = userId;
    this.ghInstance = new GitHub();
    this.user = this.ghInstance.getUser(userId);
  }

  get getProfile() {
    memoizeOptions.cacheKey = () => `getProfile-${this.userId}`;
    return mem(this.user.getProfile.bind(this.user), memoizeOptions);
  }

  get listRepos() {
    memoizeOptions.cacheKey = () => `listRepos-${this.userId}`;
    return mem(this.user.listRepos.bind(this.user), memoizeOptions);
  }
}

export default function factory(userId) {
  const userWrapper = new MemoizedGitHubUserWrapper(userId);
  return userWrapper;
}
