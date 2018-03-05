import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { TestDetailPage } from '../../pages/test-detail/test-detail';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  posts:any;
  constructor(public navCtrl: NavController, 
    public httpClient:HttpClient,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {

    let loading = this.loadingCtrl.create({});
    loading.present();

    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data => {
      this.posts = data;
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');

  }

  
  goDetail(item) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(TestDetailPage,{'id':item.id});
  }


}
