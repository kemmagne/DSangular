import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) },

  { path: '',  redirectTo: 'login', pathMatch: 'full' },


  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },


  { path: 'super-admin', loadChildren: () => import(`./super-admin/super-admin.module`).then(m => m.SuperAdminModule) },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
