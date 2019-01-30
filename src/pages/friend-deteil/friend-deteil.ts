import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../Models/Friendmodels';



@Component({
  selector: 'page-friend-deteil',
  templateUrl: 'friend-deteil.html',
})
export class FriendDeteilPage {

  studentID:number;
  friend:Friend;

  constructor(public Friendrest : FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.Friendrest.getFriendsList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
     });

  }

  ionViewDidLoad() {
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
  }

  gotoBack(){
    this.navCtrl.pop();
  }
}
