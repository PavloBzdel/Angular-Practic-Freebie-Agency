import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WeAreComponent } from './components/we-are/we-are.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorksComponent } from './components/works/works.component';
import { TeamComponent } from './components/team/team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeAreComponent,
    OurServicesComponent,
    WorksComponent,
    TeamComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
