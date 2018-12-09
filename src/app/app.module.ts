import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AOS } from 'aos';
import { HttpClientModule} from '@angular/common/http';
import {VideosService} from './services/videos.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {FirestoreService} from './services/firestore.service';
import { YTvideosPipe } from './ytvideos.pipe';
import {RouterModule} from '@angular/router';
import {ClaninfoService} from './services/claninfo.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'clan',
    pathMatch: 'full'
  },
  {
    path: 'clan',
    component: IntroComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroComponent,
    YTvideosPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    VideosService,
    FirestoreService,
    ClaninfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
