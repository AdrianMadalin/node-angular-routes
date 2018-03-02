import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.loadUsers()
      .subscribe(
        (response: Response) =>{
          console.log(response);
          // this.users = response
        }
      )
  }

}
