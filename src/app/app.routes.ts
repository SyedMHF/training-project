import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {TestPage} from './dashboard/test.page';
import {StudentDetailPage} from './dashboard/student-detail.page';
import {AlbumListPage} from './dashboard/album-list.page';
import {AlbumListDetailPage} from './dashboard/album-list-detail.page';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './login/login.component';
import {StudentListPage} from './dashboard/student-list.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'test',
        component: TestPage,
      },
      {
        path: 'studentDetail/:matricNumber',
        component: StudentDetailPage,
      },
      {
        path: 'album',
        component: AlbumListPage,
      },
      {
        path: 'albumDetail/:userId',
        component: AlbumListDetailPage,
      },
      { path: '', component: HomeComponent,
        canActivate: [AuthGuard]
      },
      { path: 'login',
        component: LoginComponent
      },
      { path: 'student-list',
        component: StudentListPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
