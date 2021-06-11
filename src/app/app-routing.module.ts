import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KidsComponent } from './kids/kids.component';
import { RegisterKidComponent } from './register-kid/register-kid.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
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
