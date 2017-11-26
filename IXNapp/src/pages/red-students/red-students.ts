import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-red-students',
  templateUrl: 'red-students.html'
})

export class RedStudentsPage implements OnInit {

RedWeeks: any[];
RedStudents: String[];
Contribution: String[];
Clicked: string;
	

  constructor(public navCtrl: NavController) {
  }

ngOnInit() {

	this.RedStudents = ["Gary Johnson", "Abigail Taylor", "Tony Whatever", "Gideon Hacquah", ];
}

onClick() {
	this.RedWeeks = [ {Week: "Week 1", Contr: "30%"}, {Week: "Week 2", Contr: "29%"}, {Week: "Week 3", Contr: "33%"}];
	this.Contribution = ["Contribution"];
}

}
