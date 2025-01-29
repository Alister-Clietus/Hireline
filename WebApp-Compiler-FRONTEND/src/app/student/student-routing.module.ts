import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingComponent } from './programming/programming.component';
import { LandingComponent } from './landing/landing.component';
import { McqComponent } from './mcq/mcq.component';
import { ProgrammingLandingComponent } from './programming-landing/programming-landing.component';
import {IsmcqGuard} from '../service/gurad/ismcq.guard';
import { ProgrammingGuard } from '../service/gurad/programming.guard';
import { VisitedroutesGuard } from '../service/gurad/visitedroutes.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';
import { SubmitGuard } from '../service/gurad/submit.guard';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { ChampionComponent } from './student-portal/champion/champion.component';
import { UpdateComponent } from './student-portal/update/update.component';
import { JobalertsComponent } from './student-portal/jobalerts/jobalerts.component';



const routes: Routes = [
{path:"landing",component:LandingComponent,canActivate: [SubmitGuard]},
{path:"mcq",component:McqComponent,canActivate: [IsmcqGuard,SubmitGuard]},
{path:"programmingLanding",component:ProgrammingLandingComponent,canActivate: [ProgrammingGuard,SubmitGuard]},
{path:"programming/:selectedQuestionId/:selectedQuestion/:selectedQuestionHeading",component:ProgrammingComponent,canActivate: [SubmitGuard]},
{path:"thankyou",component:ThankyouComponent},
{path:"submitpage",component:SubmitpageComponent},
{path:"student-portal",component:StudentPortalComponent},
{path:"champion",component:ChampionComponent},
{path:"update",component:UpdateComponent},
{path:"jobalerts",component:JobalertsComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
