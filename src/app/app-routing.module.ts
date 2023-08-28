import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ClassesComponent } from './components/classes/classes.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'classes',
    component:ClassesComponent
  },
  {
    path:'subjects',
    component:SubjectsComponent
  },
  {
    path:'rewards',
    component:RewardsComponent
  },
  {
    path:'progress',
    component:ProgressComponent
  },
  {
    path:'signin',
    component:SigninComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
