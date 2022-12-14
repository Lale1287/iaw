import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FileFormComponent} from './file-form/file-form.component';
import {FileListComponent} from './file-list/file-list.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'new-user', component: UserFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list-all', component: FileListComponent},
  {path: 'new-file', component: FileFormComponent},
  {path: 'modify/:idx', component: FileFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    FileFormComponent,
    HomeComponent,
    LoginComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
