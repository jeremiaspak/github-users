import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalService } from '../@theme/components/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  userList: {}[] = [];
  isNetworkAvailable: boolean = true;
  isUpdateAvailable: boolean = false;

  constructor(
    private userService: UserService,
    private modalSer: ModalService
  ) { }

  ngOnInit() {}

  onSearch(searchTerm: string) {
    this.isNetworkAvailable = true;

    this.userService.searchUser(searchTerm)
      .subscribe(
        (userList: User[]) => {
          this.userList = userList.map(user => {
            return {
              text: user.login,
              imageUrl: user.avatarUrl,
              imageAlt: `${user.login}'s picture`,
              link: `/user/${user.login}`,
              label: `${user.login} Github Profile`,
            };
          });
        },
        (error: HttpErrorResponse) => {
          if(error.status === 0) {
            this.isNetworkAvailable = false;
          }
        }
      )
  }
}
