import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {StudentComponent} from './student/student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {TableElementsCountComponent} from './table-elements-count/table-elements-count.component';
import {TablePaginationComponent} from './table-pagination/table-pagination.component';
import {TableSortComponent} from './table-sort/table-sort.component';
import {StudentService} from './student.service';
import {FormComponent} from './form/form.component'

const appRoutes: Routes = [
    {path: '', component: StudentListComponent},
    {path: 'student/:id', component: StudentComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        StudentComponent,
        StudentListComponent,
        TableElementsCountComponent,
        TablePaginationComponent,
        TableSortComponent,
        FormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
