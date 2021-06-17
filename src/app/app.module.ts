import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DonateformComponent } from './donateform/donateform.component';
import { DonateComponent } from './donate/donate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterKidComponent } from './register-kid/register-kid.component';
import { HomePageComponent } from './home-page/home-page.component';
import { KidsComponent } from './kids/kids.component';
import { KidComponent } from './kids/kid/kid.component';
import { SearchChildComponent } from './search-child/search-child.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DonateformComponent,
    DonateComponent,
    DashboardComponent,
    RegisterKidComponent,
    HomePageComponent,
    KidsComponent,
    KidComponent,
    SearchChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
