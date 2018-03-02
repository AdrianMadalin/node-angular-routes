import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import "rxjs/operator/map";
import {Observable} from "rxjs/Rx";

@Injectable()
export class UsersService {

  constructor(private _httpClient: HttpClient) { }

  loadUsers() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.get('/users', {headers: headers});
  }
}
