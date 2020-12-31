import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent },

  { path: 'attendance', loadChildren: () => import(`./attendace/attendace.module`).then(m => m.AttendaceModule) },


  { path: 'note', loadChildren: () => import(`./note/note.module`).then(m => m.NoteModule) },

  { path: 'bulletin', loadChildren: () => import(`./bulletin/bulletin.module`).then(m => m.BulletinModule) },

  { path: 'convocation', loadChildren: () => import(`./convocation/convocation.module`).then(m => m.ConvocationModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
