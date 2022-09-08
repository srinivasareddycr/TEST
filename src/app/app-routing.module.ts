import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './Components/student/student.component';
import { AboutComponent } from './Components/about/about.component';
import { ReadComponent } from './Components/read/read.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { UpdateComponent } from './Components/update/update.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [{path:'student', component:StudentComponent}, {path:'about', component:AboutComponent},
{path:'read',component:ReadComponent}, {path:'delete',component:DeleteComponent} ,  {path:'update',component:UpdateComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
