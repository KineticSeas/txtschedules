import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteParameterResolver } from 'sql-components';
import { ForcedLogoutComponent } from './auth/forced-logout/forced-logout.component';
import { InvalidTokenComponent } from './auth/invalid-token/invalid-token.component';
import { NewSigninComponent } from './auth/new-signin/new-signin.component';
import { UserEnrollComponent } from './auth/user-enroll/user-enroll.component';
import { UserLogoutComponent } from './auth/user-logout/user-logout.component';
import { DataResolver, MenuResolver, UserResolver } from './data.resolver';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { DocWorkspaceTableComponent } from './features/doc-workspace-table/doc-workspace-table.component';
import { DocumentDashboardComponent } from './features/document-dashboard/document-dashboard.component';
import { SettingsComponent } from './auth/settings/settings.component';
import { VerifyDocComponent } from './features/verify-doc/verify-doc.component';
import { DocumentListComponent } from './features/documents/document-list/document-list.component';
import { MyTeamListComponent } from './features/team/my-team-list/my-team-list.component';
import { DocumentShareListComponent } from './features/documents/document-share-list/document-share-list.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ModelDashboardComponent } from './pages/model-dashboard/model-dashboard.component';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { VmControlComponent } from './pages/vm-control/vm-control.component';
import { VmListComponent } from './pages/vm-list/vm-list.component';
import { VmDashboardComponent } from './pages/vm-dashboard/vm-dashboard.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddServiceComponent } from './pages/add-service/add-service.component';
import { BillingHomeComponent } from './pages/billing-home/billing-home.component';
import { SupportHomeComponent } from './pages/support-home/support-home.component';
import { NetworkStatusComponent } from './pages/network-status/network-status.component';
import { AffiliateHomeComponent } from './pages/affiliate-home/affiliate-home.component';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { AddHowtoComponent } from './pages/add-howto/add-howto.component';
import { HowtoListComponent } from './forms/howto-list/howto-list.component';

const routes: Routes = [
  { path: '', component: NewSigninComponent },
  { path: 'workspace-table', component: DocWorkspaceTableComponent },
  { path: 'projects', component: ProjectListComponent, resolve: { data: DataResolver }},
  { path: 'edit-howto/:id', component: AddHowtoComponent, resolve: { data: DataResolver }},
  { path: 'howto-list', component: HowtoListComponent, resolve: { data: DataResolver }},
  { path: 'billing', component: BillingHomeComponent, resolve: { data: DataResolver }},
  { path: 'support', component: SupportHomeComponent, resolve: { data: DataResolver }},
  { path: 'settings', component: SettingsComponent, resolve: { data: DataResolver }},
  { path: 'affiliates', component: AffiliateHomeComponent, resolve: { data: DataResolver }},
  { path: 'open-ticket', component: OpenTicketComponent, resolve: { data: DataResolver }},
  { path: 'network', component: NetworkStatusComponent, resolve: { data: DataResolver }},
  { path: 'product-list', component: ProductListComponent, resolve: { data: DataResolver }},
  { path: 'vm-control', component: VmControlComponent, resolve: { data: DataResolver }},
  { path: 'vm-list', component: VmListComponent, resolve: { data: DataResolver }},
  { path: 'models', component: ModelListComponent, resolve: { data: DataResolver }},
  { path: 'model-dashboard/:id', component: ModelDashboardComponent, resolve: { data: DataResolver }},
  { path: 'project-dashboard/:id', component: ProjectDashboardComponent, resolve: { data: DataResolver }},
  { path: 'vm-dashboard/:id', component: VmDashboardComponent, resolve: { data: DataResolver }},
  { path: 'verify', component: VerifyDocComponent, resolve: { data: DataResolver }},
  { path: 'documents', component: DocumentListComponent, resolve: { data: DataResolver }  },
  { path: 'document-dashboard/:id', component: DocumentDashboardComponent, resolve: { data: DataResolver }  },
  { path: 'team', component: MyTeamListComponent, resolve: { data: DataResolver }  },
  { path: 'shares', component: DocumentShareListComponent, resolve: { data: DataResolver }  },
  { path: 'add-service', component: AddServiceComponent, resolve: { data: DataResolver }  },
  { path: 'services', component: AddServiceComponent, resolve: { data: DataResolver }  },
  { path: 'sadmin', component: AdminDashboardComponent, resolve: { data: DataResolver, userdata: UserResolver, menudata: MenuResolver }, },
  { path: 'dashboard/:id', component: AdminDashboardComponent, resolve: { data: DataResolver, userdata: UserResolver, menudata: MenuResolver }, },
  { path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'e/:id', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'e', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'forced-off/:id', component: ForcedLogoutComponent },
  { path: 'forced-off', component: ForcedLogoutComponent },
  { path: 'sign-in', component: NewSigninComponent },
  { path: 'error', component: InvalidTokenComponent },
  { path: 'enroll', component: UserEnrollComponent, resolve: { data: DataResolver }, },
  { path: 'user-logout', component: UserLogoutComponent },
  { path: 'enroll/:id', component: UserEnrollComponent },
  { path: 'enroll', component: UserEnrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
