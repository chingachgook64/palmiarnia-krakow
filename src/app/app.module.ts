import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { SwiperModule } from 'swiper/angular';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PalmsComponent } from './offer/palms/palms.component';
import { ExoticTreesComponent } from './offer/exotic-trees/exotic-trees.component';
import { CitrusesComponent } from './offer/citruses/citruses.component';
import { OliveTreesComponent } from './offer/olive-trees/olive-trees.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    PalmsComponent,
    ExoticTreesComponent,
    CitrusesComponent,
    OliveTreesComponent,
  ],
  imports: [
    BrowserModule,
    MdbCollapseModule,
    MdbCarouselModule,
    MdbTabsModule,
    MdbAccordionModule,
    SwiperModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
