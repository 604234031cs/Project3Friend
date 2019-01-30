import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Friend } from '../../Models/Friendmodels';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FriendrestProvider {

  private url:string="https://raw.githubusercontent.com/604234031cs/dataFriend/master/newjson.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

  getFriendsList():Observable<any>{
    return this.http.get<Friend>(this.url);
  }

  
}
