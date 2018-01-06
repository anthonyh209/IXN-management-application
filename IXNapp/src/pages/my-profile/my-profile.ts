import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { HouseProvider } from '../../providers/house/house';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  firstName = '';
  lastName = '';
  email = '';
  type = '';
  password;
  data: any = {};
  
  constructor(private app: App, public navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, public house: HouseProvider) {
    let info = this.auth.getUserInfo();
    this.firstName = info['firstName'];
    this.lastName = info['lastName'];
    this.email = info['email'];
    this.type = info['type'];
  }
  
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
  
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  
  changePassword() {
    if (this.password === null || this.password == null) {
        this.showError("No password inserted");
    }
    else if (this.password !== null) {
        if (this.password.length < 6) {
            this.showError("Please choose a password that is at least 6 characters long");
        }
        else {
            // BACKEND HERE TO SAVE PASSWORD
            
            this.house.PassPrelim(this.password).subscribe(data => {
            this.data.response = data["_body"];
            }, error => {
            console.log("Oooops!");
            });
            
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'Your password was changed',
              buttons: ['OK']
            });
            alert.present(prompt);
            this.password = null;
        }
    }
    
  }
  
  // BACKEND HERE FOR SUPERVISING GROUPS
  items = ['G1', 'G3', 'G8'];
  
}
