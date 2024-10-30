import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './presentations/page/login/login.component';
import {ReportComponent} from './presentations/page/report/report.component';
import {AddTeacherComponent} from './presentations/page/teachers/add-teacher/add-teacher.component';
import {EditTeacherComponent} from './presentations/page/teachers/edit-teacher/edit-teacher.component';
import {AddUserComponent} from './presentations/page/users/add-user/add-user.component';
import {EditUserComponent} from './presentations/page/users/edit-user/edit-user.component';
import {ListUserComponent} from './presentations/page/users/list-user/list-user.component';
import {SidebarComponent} from './presentations/component/layout/sidebar/sidebar.component';
import {AddStudentComponent} from './presentations/page/students/add-student/add-student.component';
import {EditStudentComponent} from './presentations/page/students/edit-student/edit-student.component';
import {ListStudentComponent} from './presentations/page/students/list-student/list-student.component';
import {ListTeacherComponent} from './presentations/page/teachers/list-teacher/list-teacher.component';
import {DashboardComponent} from './presentations/page/home/dashboard/dashboard.component';


export const routes: Routes = [

  {path: 'sidebar', component : SidebarComponent,
    children: [
      {path : 'add-student', component : AddStudentComponent},
      {path : 'edit-student', component : EditStudentComponent},
      {path : 'list-student', component : ListStudentComponent},
      {path : 'add-teacher', component : AddTeacherComponent },
      {path : 'edit-teacher', component : EditTeacherComponent},
      {path : 'list-teacher', component: ListTeacherComponent},
      {path : 'add-user', component : AddUserComponent },
      {path : 'edit-user', component : EditUserComponent},
      {path : 'list-user', component : ListUserComponent},
      {path: 'dashboard', component : DashboardComponent},
      {path : 'reports', component : ReportComponent},
    ]
  },
  {path : 'login', component : LoginComponent},
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  ];

