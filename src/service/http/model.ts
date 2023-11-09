import { GithubUserPayload, GithubUserRepositoryResponsePayload } from "../../pages/Home/model";

export interface IHttpClient {
  init(): void;
  searchUsers(query: string): Promise<Array<GithubUserPayload>>;
  fetchUserRepositories(userName: string): Promise<GithubUserRepositoryResponsePayload>;
}