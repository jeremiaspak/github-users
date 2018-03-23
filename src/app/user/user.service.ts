import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from './user.model';
import { Repository } from './repository.model';

@Injectable()
export class UserService {
  private apiUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) { }

  searchUser(searchTerm: string): Observable<User[]> {
    return this.httpClient.get(
      `${this.apiUrl}/search/users?q=${searchTerm}`
    )
    .map(
      (response: {}) => {
        let users: User[] = [];
        for(let user of response['items']) {
          users.push(this.createUser(user));
        }
        return users;
      }
    );
  }

  getUserByLogin(login: string): Observable<User> {
    return this.httpClient.get(
      `${this.apiUrl}/users/${login}`
    )
    .map((response: {}) => this.createUser(response));
  }

  getUserRepositories(login: string): Observable<Repository[]> {
    return this.httpClient.get(
      `${this.apiUrl}/users/${login}/repos`
    )
    .map((response: {}[]) => this.mapRepositories(response));
  }

  getUserStarredRepositories(login: string): Observable<Repository[]> {
    return this.httpClient.get(
      `${this.apiUrl}/users/${login}/starred`
    )
    .map((response: {}[]) => this.mapRepositories(response));
  }

  private mapRepositories(response: {}[]): Repository[] {
    let repositories: Repository[] = [];
    for(let repository of response) {
      repositories.push(this.createRepository(repository));
    }
    return repositories;
  }

  private createUser(user: {}): User {
    return new User(
      user['name'],
      user['login'],
      user['avatar_url'],
      user['repos_url'],
      user['starred_url'],
    );
  }

  private createRepository(repository: {}): Repository {
    return new Repository(
      repository['name'],
      repository['description'],
      {
        login: repository['owner']['login']
      },
    );
  }
}
