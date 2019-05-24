import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './header/contacts/contacts.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { BucketComponent } from './header/bucket/bucket.component';
import { AuthorizationComponent } from './header/authorization/authorization.component';
import { CheckInComponent } from './header/check-in/check-in.component';
import { LogInComponent } from './header/authorization/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ContactsComponent,
    LogoComponent,
    MenuComponent,
    BucketComponent,
    AuthorizationComponent,
    CheckInComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
