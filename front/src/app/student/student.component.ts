import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Response} from '@angular/http';
import * as Rx from 'rxjs/Rx';

import {PersonService} from '../student.service';
import {Student} from '../domain';
import {showLoading, hideLoading, doNothing} from '../commons'
import {FormComponent} from "../form/form.component";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    student: Student;

    @Input() formComponentRef : FormComponent;


    constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params=> {
            this.studentService.getStudent(Number(params['id'])).subscribe(student => this.student = student);
        });

    }

    delete(student) {
        let observable: Rx.Observable<Response> = this.studentService.deleteStudent(student.id);
        showLoading();
        observable.subscribe(doNothing, hideLoading, ()=> {
            this.router.navigate(['']);
            hideLoading();
        });
    }


    editpopup(student){//popup-modal
        console.log("student method called ");
        //Add code if you want edit functionality in student component 

        //this.formComponentRef.methodToFetchDataFromOtherComponent(student);
        //this.formComponentRef.methodToFetchDataFromOtherComponent(student);
        /* let observable : Rx.Observable<void> = this.studentService.updateStudent(student.id);
        showLoading();
        observable.subscribe(doNothing, hideLoading, ()=>{
            this.router.navigate(['']);
            hideLoading();
        });*/

    }



    back() {
        history.back();
    }
}
