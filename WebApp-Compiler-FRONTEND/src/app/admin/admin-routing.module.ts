import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../superadmin/sidebar/sidebar.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';


const routes: Routes = 
[
  {path:"sidebar-admin",component:PlacementSidebarComponent},
  {path:"placement",component:PlacementAdminComponent},
  {path:"champion",component:ChampionComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
