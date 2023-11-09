export interface GithubUserSearchResponsePayload {
    incomplete_results: boolean;
    total_count: number;
    items: Array<GithubUserPayload>;
}

export type GithubUserRepositoryResponsePayload = Array<GithubUserRepositoryPayload>;

export interface GithubUserPayload {
    id: number;
    login: string;
    repos_url: string;
}

export interface GithubUserRepositoryPayload {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
}
