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
import { ExoticPlantsComponent } from './offer/exotic-plants/exotic-plants.component';
import { YuccasComponent } from './offer/yuccas/yuccas.component';
import { OliveTreesComponent } from './offer/olive-trees/olive-trees.component';
import { PalmDetailsComponent } from './offer/palms/palm-details/palm-details.component';
import { ExoticPlantsDetailsComponent } from './offer/exotic-plants/exotic-plants-details/exotic-plants-details.component';
import { OliveTreesDetailsComponent } from './offer/olive-trees/olive-trees-details/olive-trees-details.component';
import { YuccasDetailsComponent } from './offer/yuccas/yuccas-details/yuccas-details.component';
import { OfferComponent } from './offer/offer.component';
import { PlantsAtCustomersComponent } from './plants-at-customers/plants-at-customers.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    PalmsComponent,
    ExoticPlantsComponent,
    YuccasComponent,
    OliveTreesComponent,
    PalmDetailsComponent,
    ExoticPlantsDetailsComponent,
    OliveTreesDetailsComponent,
    YuccasDetailsComponent,
    OfferComponent,
    PlantsAtCustomersComponent,
    AboutComponent,
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
