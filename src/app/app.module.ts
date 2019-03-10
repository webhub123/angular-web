

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    IndexComponent,

    RegisterComponent,
    LoginComponent,
    ErrorPageComponent,
    AdminComponent,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : IndexComponent
      },
      {
        path : 'register',
        component : RegisterComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },

      {
        path : 'admin/:name',
        component : AdminComponent
      },
      {
        path : '**',
        component : ErrorPageComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
