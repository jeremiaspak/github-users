import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../user.model';
import { Repository } from '../repository.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  user: User;
  repositories: Repository[];
  starredRepositories: Repository[];
  tabs: string[] = [
    'Repositories',
    'Starred',
  ];
  activeTab: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.findUser(params['login']);
      }
    )
  }

  findUser(login: string) {
    this.userService.getUserByLogin(login)
      .subscribe(
        (user: User) => {
          this.user = user;
        }
      )
  }

  onTabSelected(data) {
    this.getTabContent(data);
  }

  getTabContent(tab: string) {
    this.activeTab = tab;
    console.log(this.activeTab)

    if(this.activeTab === 'Repositories') {
      this.userService.getUserRepositories(this.user.login)
        .subscribe(
          (repositories: Repository[]) => {
            this.repositories = repositories;
          }
        )
    }
    else if(this.activeTab === 'Starred') {
      this.userService.getUserStarredRepositories(this.user.login)
        .subscribe(
          (repositories: Repository[]) => {
            this.starredRepositories = repositories;
          }
        )
    }
  }
}
