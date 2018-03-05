import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the TestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-detail',
  templateUrl: 'test-detail.html',
})
export class TestDetailPage {
  Title:string;
  Details:string;
  ItemId:any;
  constructor(public navCtrl: NavController, public httpClient:HttpClient, public navParams: NavParams) {
    //alert(navParams.get("id"));
    this.ItemId=navParams.get("id");

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/'+this.ItemId)
    .subscribe(data => {
      console.log(data);
      this.Title=data['title'];
      this.Details=data['body'];
    });

   
  }
}
