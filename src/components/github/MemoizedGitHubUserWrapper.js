import GitHub from 'github-api';
import mem from 'mem';

const memoizeOptions = {
  maxAge: 1000 * 60 * 60 // 1 hour
};

class MemoizedGitHubUserWrapper {
  constructor(userId) {
    this.ghInstance = new GitHub();
    this.user = this.ghInstance.getUser(userId);
  }

  get getProfile() {
    return mem(this.user.getProfile.bind(this.user), memoizeOptions);
  }

  get listRepos() {
    return mem(this.user.listRepos.bind(this.user), memoizeOptions);
  }
}

export default function factory(userId) {
  const userWrapper = new MemoizedGitHubUserWrapper(userId);
  return userWrapper;
}
