import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  userList: {}[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() { }

  onSearch(searchTerm: string) {
    this.userService.searchUser(searchTerm)
      .subscribe(
        (userList: User[]) => {
          this.userList = userList.map(user => {
            return {
              text: user.login,
              imageUrl: user.avatarUrl,
              link: `/user/${user.login}`
            };
          });
        }
      )
  }
}
