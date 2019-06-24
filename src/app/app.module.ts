import { TokenInterceptorService } from './token-interceptor.service';
import { MiddlewareGuard } from 'src/app/middleware.guard';
import { ListService } from './service/list.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditComponent } from './list/edit/edit.component';
import { CreateComponent } from './list/create/create.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
  ],
  providers: [
    ListService, MiddlewareGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
