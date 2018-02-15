import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AcademicService} from '../services/academic.service';
import {TestPage} from './dashboard/test.page';
import {StudentDetailPage} from './dashboard/student-detail.page';
import {GalleryService} from '../services/gallery.service';
import {AlbumListPage} from './dashboard/album-list.page';
import {AlbumListDetailPage} from './dashboard/album-list-detail.page';
import {StudentCreatorDialog} from './dashboard/student-creator.dialog';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment.prod';
import {StudentTypePipe} from './dashboard/student-type.pipe';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AppMaterialModule} from './app-material/app-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {StudentListPage} from './dashboard/student-list.page';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    MainLayout,
    TestPage,
    StudentDetailPage,
    AlbumListPage,
    AlbumListDetailPage,
    StudentCreatorDialog,
    StudentTypePipe,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    StudentListPage,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NgxChartsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AssetService, AcademicService, GalleryService, AuthService, AuthGuard],
  entryComponents: [AssetCreatorDialog, StudentCreatorDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
