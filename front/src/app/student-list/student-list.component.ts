import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Response} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import * as Rx from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';

import {PaginationPage, PaginationPropertySort} from '../pagination';
import {Table} from '../table';
import {showLoading, hideLoading, doNothing} from '../commons'
import {StudentService} from '../student.service';
import {Student, User} from '../domain';
import {FormComponent} from "../form/form.component";


@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, Table<Student> {

    studentPage: PaginationPage<Student>;
    studentClass: User = new User();
    self: Table<Student>;
    @Input() tempmsg ;
    @Output() updateVals = new EventEmitter();

    constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
    }

    @Output() formCompRef = new FormComponent(this.router,this.route,this.studentService);

    @Output() editValuesFromFormComponent = new EventEmitter();

    ngOnInit() {
        let observable: Rx.Observable<PaginationPage<any>> = this.fetchPage(0, 10, null);
        showLoading();
        observable.subscribe(doNothing, hideLoading, hideLoading);
        this.self = this;
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort): Rx.Observable<PaginationPage<Student>> {
        let observable: Rx.Observable<PaginationPage<Student>> = this.studentService.findStudents(pageNumber, pageSize, sort);
        observable.subscribe(studentPage => this.studentPage = studentPage);
        return observable;
    }

    goToDetails(student) {
        this.router.navigate(['student', student.id]);
    }

    delete(student) {

        let observable: Rx.Observable<Response> = this.studentService.deleteStudent(student.id);
        showLoading();
        observable.switchMap(() => {
            return this.fetchPage(0, 5, null);
        }).subscribe(doNothing, hideLoading, hideLoading);
    }

    editpopup(user : User){//popup-modal
        console.log(""+user.id , user.firstname, user.lastname ,user.age);
        this.formCompRef.passingValuesEdit(user);
    }








}
