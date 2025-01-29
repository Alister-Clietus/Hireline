import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProgrammingComponent } from './programming/programming.component';
import { McqComponent } from './mcq/mcq.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { ProgrammingLandingComponent } from './programming-landing/programming-landing.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';
import { ChampionComponent } from './student-portal/champion/champion.component';
import { UpdateComponent } from './student-portal/update/update.component';
import { JobalertsComponent } from './student-portal/jobalerts/jobalerts.component';


@NgModule({
  declarations: [ProgrammingComponent, McqComponent, LandingComponent, ProgrammingLandingComponent, TimerComponent, HeaderComponent, SubmitpageComponent, ThankyouComponent, StudentPortalComponent, StudentSideBarComponent, ChampionComponent, UpdateComponent, JobalertsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
  ]
})
export class StudentModule { }
