export class User {
  public name: string;
  public login: string;
  public avatarUrl: string;
  public reposUrl: string;
  public starredUrl: string;

  constructor(
    name: string,
    login: string,
    avatarUrl: string,
    reposUrl: string,
    starredUrl: string,
  ) {
    this.name = name;
    this.login = login;
    this.avatarUrl = avatarUrl;
    this.reposUrl = reposUrl;
    this.starredUrl = starredUrl;
  }
}
