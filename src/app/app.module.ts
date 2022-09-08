import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './Components/student/student.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Components/about/about.component';
import { ReadComponent } from './Components/read/read.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { UpdateComponent } from './Components/update/update.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentComponent,
    AboutComponent,
    ReadComponent,
    DeleteComponent,
    UpdateComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
