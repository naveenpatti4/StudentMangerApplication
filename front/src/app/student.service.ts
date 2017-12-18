import {Injectable} from '@angular/core';
import {Student, User} from './domain'
import {PaginationPage, PaginationPropertySort} from './pagination';
import {webServiceEndpoint} from './commons';
import {Http, Response, URLSearchParams, RequestOptions, Headers} from '@angular/http';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publish';

@Injectable()
export class StudentService {

    constructor(private http: Http) {
        this.http = http;
    }

    findStudents(page: number, pageSize: number, sort: PaginationPropertySort): Rx.Observable<PaginationPage<Student>> {
        let params = new URLSearchParams();
        params.set('size', `${pageSize}`);
        params.set('page', `${page}`);
        if (sort != null) {
            params.set('sort', `${sort.property},${sort.direction}`);
        }

        let options = new RequestOptions({
            search: params
        });
        return this.http.get(`${webServiceEndpoint}/student`, options).map(this.extractData).publish().refCount();
    }

    getStudent(id: number): Rx.Observable<Student> {
        return this.http.get(`${webServiceEndpoint}/student/${id}`).map(this.extractData).publish().refCount();
    }

    deleteStudent(id: number): Rx.Observable<Response> {
        return this.http.delete(`${webServiceEndpoint}/student/${id}`).publish().refCount();
    }

    getValue(studentClass : User) : Rx.Observable<Response>{
        var studentClassObj = {"id":studentClass.id,"firstname":studentClass.firstname, "age":studentClass.age, "lastname":studentClass.lastname,"dateOfBirth":"null" }
        return this.http.get(`${webServiceEndpoint}/student/${studentClass.id}`);
    }


    updateStudent(studentClass : User) : Rx.Observable<string>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Cache-Control", "no-cache");
        headers.append("Cache-Control", "no-store");
        headers.append("If-Modified-Since", "Mon, 26 Jul 1997 05:00:00 GMT");
        var myObjUpdate ={"id":studentClass.id,"firstname":studentClass.firstname, "age":studentClass.age, "lastname":studentClass.lastname,"dateOfBirth":"null" }
        return this.http.post(`${webServiceEndpoint}/student/${studentClass.id}`,JSON.stringify(myObjUpdate),{
            headers : headers
        }).map((res: Response) => {
            return res.json();
        }).publish().refCount();
    }

    createStudent(studentClass : User): Rx.Observable<string>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Cache-Control", "no-cache");
        headers.append("Cache-Control", "no-store");
        headers.append("If-Modified-Since", "Mon, 26 Jul 1997 05:00:00 GMT");
        var myObj = { "firstname":studentClass.firstname, "age":studentClass.age, "lastname":studentClass.lastname,"dateOfBirth":"null" };
        return this.http.post(`${webServiceEndpoint}/student`, JSON.stringify(myObj), {
            headers: headers
        }).map((res: Response) => {
                return res.json();
            }).publish().refCount();
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
