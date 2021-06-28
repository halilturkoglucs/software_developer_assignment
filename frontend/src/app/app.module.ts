import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {DirectorComponent} from './director/director.component';
import {ManagerComponent} from './manager/manager.component';
import {UserComponent} from './user/user.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {TooltipDirective} from "./_helpers/tooltip.directive";
import {AlertBoxComponent} from "./alert-box/alert-box.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DirectorComponent,
    ManagerComponent,
    UserComponent,
    AlertBoxComponent,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
