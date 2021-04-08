import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClubComponent } from './club/club.component';
import { InteristiComponent } from './interisti/interisti.component';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';
import { NewsComponent } from './news/news.component';
import { SeasonComponent } from './season/season.component';
import { ShopComponent } from './shop/shop.component';
import { TicketsComponent } from './tickets/tickets.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { TeamComponent } from './team/team.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ClubComponent,
    InteristiComponent,
    LoginComponent,
    MembershipComponent,
    NewsComponent,
    SeasonComponent,
    ShopComponent,
    TicketsComponent,
    HomeComponent,
    TeamComponent,
    ChildComponent,
    ThanksPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    SlickCarouselModule,
    FontAwesomeModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
 }
