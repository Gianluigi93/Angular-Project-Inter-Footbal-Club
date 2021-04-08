import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ClubComponent } from './club/club.component';
import { HomeComponent} from './home/home.component';
import { InteristiComponent } from './interisti/interisti.component';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';
import { NewsComponent } from './news/news.component';
import { SeasonComponent } from './season/season.component';
import { ShopComponent } from './shop/shop.component';
import { TeamComponent } from './team/team.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';



const routes: Routes = [
  { path: "" , component: HomeComponent},
  { path: "club" , component: ClubComponent},
  { path: "interisti" , component: InteristiComponent},
  { path: "login" , component: LoginComponent},
  { path: "membership" , component: MembershipComponent},
  { path: "news" , component: NewsComponent},
  { path: "season" , component: SeasonComponent},
  { path: "shop" , component: ShopComponent},
  { path: "team" , component: TeamComponent},
  { path: "tickets" , component: TicketsComponent},
  { path: "child" , component: ChildComponent},
  { path: "login" , component: LoginComponent },
  { path: "thanks" , component: ThanksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
