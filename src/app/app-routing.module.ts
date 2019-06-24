import { MiddlewareGuard } from './middleware.guard';
import { CreateComponent } from './list/create/create.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditComponent } from './list/edit/edit.component';

const route : Routes = [  
  { path : '', component : IndexComponent },
  { path : 'list', component : ListComponent, canActivate : [ MiddlewareGuard ] },
  { path : 'register', component : RegisterComponent },
  { path : 'login', component : LoginComponent },
  { path : 'admin', component : AdminComponent, canActivate : [ MiddlewareGuard ] },
  { path : 'create', component : CreateComponent, canActivate : [ MiddlewareGuard ] },
  { path : 'edit/:id', component : EditComponent, canActivate : [ MiddlewareGuard ] },
  { path : '**', component : ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports : [RouterModule]
})

export class AppRoutingModule { }
