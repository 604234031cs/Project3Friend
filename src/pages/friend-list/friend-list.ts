import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendDeteilPage } from '../friend-deteil/friend-deteil';
import { Friend } from '../../Models/Friendmodels';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';



@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  Friends:Friend
  classroom:string;

  constructor(private Friendrest:FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
   this.Friendrest.getFriendsList().subscribe(data=>{
    this.Friends=data.filter(Friend => Friend.classroom === this.classroom);
   });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }


  showDetail(studentID:number){
    this.navCtrl.push(FriendDeteilPage,
      {studentID:studentID}
    );
  }
  gotoBack(){
    this.navCtrl.pop();
  }
}
