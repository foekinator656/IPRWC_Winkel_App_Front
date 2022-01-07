import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users-service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    // this.usersService.fetchShopUsers();
  }
}
