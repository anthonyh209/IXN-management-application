import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule} from '@angular/core';


@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
 goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
  
  currentdateindex = 1;
  dates = ["25th of Sept to 1st of Oct 2017","2nd of Oct to 8th of Sept 2017","9th of Oct to 15th of Oct 2017"];
  
  weeks = ["Week 1", "Week 2", "Week 3"]
  
  names = ['Samantha Watson', 'John Taylor', 'James Kirk'];
  
  button1;
  button2;
  button3;
  button4;
  
  
  buttonOneClicked() : void {
    this.button1 = "highlighted";
    this.button2 = this.button3 = this.button4 = "nothighlighted";
  }
  buttonTwoClicked() : void {
    this.button2 = "highlighted";
    this.button1 = this.button3 = this.button4 = "nothighlighted";
  }
  buttonThreeClicked() : void {
    this.button3 = "highlighted";
    this.button1 = this.button2 = this.button4 = "nothighlighted";
  }
  buttonFourClicked() : void {
    this.button4 = "highlighted";
    this.button1 = this.button2 = this.button3 = "nothighlighted";
  }
  
  nextweek() : void {
    if (this.currentdateindex < this.weeks.length-1) {
        this.currentdateindex++;
    }
  }
  
  previousweek() : void {
    if (this.currentdateindex > 0) {
        this.currentdateindex--;
    }
  }
  
  studentbutton1;
  studentbutton2;
  studentbutton3;
  studentbutton4;
  
  studentbuttonOneClicked(i) : void {
    //var myEl = ng.element( document.querySelector( '#studentbutton10' ) );
    //myEl.addClass('highlighted');
    //var myElement = angular.element( document.querySelector('a[target="studentbutton10"]') );
    //myElement.addClass('highlighted');
    //angular.element('#studentbutton10').addClass("highlighted");
    
    let studentbutton1 = 'studentbutton1'+i;
    let studentbutton2 = 'studentbutton2'+i;
    let studentbutton3 = 'studentbutton3'+i;
    let studentbutton4 = 'studentbutton4'+i;
    console.log(studentbutton1);
    this.studentbutton1 = "highlighted";
    this.studentbutton2 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonTwoClicked(i) : void {
    let studentbutton1 = 'studentbutton1'+i;
    let studentbutton2 = 'studentbutton2'+i;
    let studentbutton3 = 'studentbutton3'+i;
    let studentbutton4 = 'studentbutton4'+i;
    console.log(studentbutton2);
    this.studentbutton2 = "highlighted";
    this.studentbutton1 = this.studentbutton3 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonThreeClicked(i) : void {
    let studentbutton1 = 'studentbutton1'+i;
    let studentbutton2 = 'studentbutton2'+i;
    let studentbutton3 = 'studentbutton3'+i;
    let studentbutton4 = 'studentbutton4'+i;
    console.log(studentbutton3);
    this.studentbutton3 = "highlighted";
    this.studentbutton2 = this.studentbutton1 = this.studentbutton4 = "nothighlighted";
  }
  studentbuttonFourClicked(i) : void {
    let studentbutton1 = 'studentbutton1'+i;
    let studentbutton2 = 'studentbutton2'+i;
    let studentbutton3 = 'studentbutton3'+i;
    let studentbutton4 = 'studentbutton4'+i;
    console.log(studentbutton4);
    this.studentbutton4 = "highlighted";
    this.studentbutton2 = this.studentbutton3 = this.studentbutton1 = "nothighlighted";
  }
  
  getclassname(studentbutton, i) {
    let classname = 'studentbutton'+studentbutton+i;
    console.log("Classname= "+classname);
    return classname;
    
  }
  
  
  
}

