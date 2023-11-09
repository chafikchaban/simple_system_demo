export interface User {
  name: string;
  repos: Array<Repository>;
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
}

