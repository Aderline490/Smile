import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KidsComponent } from './kids/kids.component';
import { RegisterKidComponent } from './register-kid/register-kid.component';
const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    pathMatch:'full'
  },
  {
    path:'kids',
    component: KidsComponent
  },
  {
    path:'registerKid',
    component:RegisterKidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
