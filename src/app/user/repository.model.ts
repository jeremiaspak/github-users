export class Repository {
  public name: string;
  public description: string;
  public owner: {
    login: string
  };

  constructor(
    name: string,
    description: string,
    owner: {
      login: string
    },
  ) {
    this.name = name;
    this.description = description;
    this.owner = owner;
  }
}
