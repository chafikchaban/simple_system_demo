import { Octokit } from "octokit";
import { GithubUserPayload, GithubUserRepositoryResponsePayload, GithubUserSearchResponsePayload } from "../../pages/Home/model";
import { IHttpClient } from "./model";

class HttpClient implements IHttpClient {
  private client;

  init = (): void => {

    this.client = new Octokit({
      auth: import.meta.env.VITE_GH_TOKEN, // your Github Personal Access Token
      userAgent: "simple-system-demo/v0.0.1",
    }).rest;
  }

  searchUsers = (query: string): Promise<Array<GithubUserPayload>> => {
    return this.client.search.users({
      q: query,
      per_page: 5
    })
      .then(res => res.data)
      .then((data: GithubUserSearchResponsePayload) => {
        return data.items
      })
  }

  fetchUserRepositories = (userName: string): Promise<GithubUserRepositoryResponsePayload> => {
    return this.client.repos.listForUser({ username: userName })
      .then(({ data }) => data)
  }
}

const httpClient = new HttpClient();

export { httpClient };
