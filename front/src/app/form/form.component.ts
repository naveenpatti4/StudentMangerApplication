import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Student, User} from "../domain";
import {Router, ActivatedRoute} from "@angular/router";
import {StudentService} from "../student.service";
import {Response} from "@angular/http";
import {showLoading, doNothing, hideLoading} from "../commons";
import * as Rx from 'rxjs/Rx';
import {StudentComponent} from "../student/student.component";
import {userInfo} from "os";
import {StudentListComponent} from "../student-list/student-list.component";
import {PaginationPropertySort, PaginationPage} from "../pagination";
import {FormGroup} from "@angular/forms";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  styles : [``]
})
export class FormComponent implements OnInit {
  myForm : FormGroup;
  student: Student;
  studentPage: PaginationPage<Student>;
  studentClass: User = new User();

  @Input() idRendered : number;
  @Input() firstnameRendered : string;
  @Input() lastnameRendered : string;
  @Input() ageRendered : string;
  //@Output() updateByEdit = new EventEmitter();


  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      if (params['id'] == null) {
      } else {
        this.studentService.getStudent(Number(params['id'])).subscribe(student => this.studentClass = student);
      }
    });
    localStorage.clear();
  }



  passingValuesCreate(hiddenId1,firstname1,lastname1,age1){
    this.studentClass.id = null;
    this.studentClass.firstname = firstname1;
    this.studentClass.lastname = lastname1;
    this.studentClass.age =age1;
    this.create(this.studentClass);
  }

  passingValuesEdit(user) {
   this.studentClass = user;
    this.SendVals(this.studentClass);
   // this.loadData();
  }

  //which fetches values from text field
  editTemp(hiddenId1,firstname1,lastname1,age1){
    this.studentClass.id = hiddenId1;
    this.studentClass.firstname = firstname1;
    this.studentClass.lastname = lastname1;
    this.studentClass.age =age1;
    this.edit(this.studentClass);
  }

  edit(studentClass){

    let observable : Rx.Observable<string> = this.studentService.updateStudent(studentClass);
    showLoading();
    observable.subscribe(doNothing, hideLoading, ()=>{
      this.router.navigate(['']);
      hideLoading();
    });
  }
  create(studentClass){


    let observable: Rx.Observable<string> = this.studentService.createStudent(this.studentClass);
    showLoading();
    observable.subscribe(doNothing, hideLoading, ()=> {
      this.router.navigate(['']);
      hideLoading();
    });
  }


//sendvals : this function is used to store and return values for particular chosen student [setters]
  SendVals(newObj) {
    localStorage.setItem('hiddenId',newObj.id);
    localStorage.setItem('firstname',newObj.firstname);
    localStorage.setItem('lastname',newObj.lastname);
    localStorage.setItem('age',newObj.age);
  }
  //loadData : this function is used to store and return values for particular chosen student [getters]
  loadData(){
    this.idRendered = parseInt(localStorage.getItem('hiddenId'));
    this.firstnameRendered = localStorage.getItem('firstname');
    this.lastnameRendered = localStorage.getItem('lastname');
    this.ageRendered =  localStorage.getItem('age');
  }

  reset(){
  localStorage.clear();
  }


}
