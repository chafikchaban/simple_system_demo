import { makeObservable, observable, action, runInAction } from 'mobx';

import { debounce } from '../../helpers';

import { httpClient } from '../../service/http/httpClient';

import { IHomeVM } from './Home.component';
import { GithubUserPayload, GithubUserRepositoryPayload, GithubUserRepositoryResponsePayload } from './model';
import { User } from '../../model/User.model';


export class HomeVM implements IHomeVM {

  public data?: Array<User>
  public query: string = '';
  public loading: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      data: observable,
      search: action,
    })
  }

  public search = debounce((query: string): Promise<void> => {

    if (!query.length) {
      return Promise.reject('cannot search for an empty string')
    }

    runInAction(() => {
      this.query = query;
      this.loading = true;
    })

    return httpClient.searchUsers(query)
      .then(this.searchRepos)
      .then(res => {
        runInAction(() => {
          this.data = res
        })
      })
      .finally(() => {
        runInAction(() => {
          this.loading = false;
        })
      })
  })

  public searchRepos = (users: Array<GithubUserPayload>): Promise<any> => {

    const userPromises = users.map((user) => {

      return httpClient.fetchUserRepositories(user.login)
        .then((repos: GithubUserRepositoryResponsePayload) => {
          return {
            name: user.login,
            repos: repos.map((repoPayload: GithubUserRepositoryPayload) => ({
              name: repoPayload.name,
              description: repoPayload.description !== '' ? repoPayload.description : 'No description for this repo',
              stars: repoPayload.stargazers_count
            }))
          }
        })
        .catch((error) => {
          console.error(`Failed to fetch repos for user ${user.login}: ${error}`);
          return user;
        });
    });

    return Promise.all(userPromises);
  }

  public initialiseData = (initialParams): void => {
    const initialQuery = initialParams['query'];

    initialQuery && this.search(initialQuery)
  }
}