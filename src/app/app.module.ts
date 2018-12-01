import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IntroComponent } from './intro/intro.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ScrollToModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
