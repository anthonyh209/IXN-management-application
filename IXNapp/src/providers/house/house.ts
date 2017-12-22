import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class HouseProvider {

	TAID: number = 1; /* I assume I know this here */

  constructor(public http: Http, public http2: Http) {
    console.log('Hello HouseProvider Provider');
  }

  getAllRedStudent() {

  	var link1 = 'http://gc02team02app.azurewebsites.net/SQL/RedStudentInit.php/';
	var myData1 = JSON.stringify({teachID: this.TAID})

 	return this.http.post(link1, myData1);

  }

  getAllRedTeam() {
  	var link2 = 'http://gc02team02app.azurewebsites.net/SQL/RedGroupsInit.php';
	var myData2 = JSON.stringify({teachID: this.TAID})

 	return this.http2.post(link2, myData2);
  	/* return this.http.get('http://gc02team02app.azurewebsites.net/SQL/RedGroup.php'); */
  }

}