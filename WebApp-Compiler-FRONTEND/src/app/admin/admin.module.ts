import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';


@NgModule({
  declarations: [PlacementAdminComponent, PlacementSidebarComponent, ChampionComponentComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
