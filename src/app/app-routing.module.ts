import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YuccasComponent } from './offer/yuccas/yuccas.component';
import { ExoticPlantsComponent } from './offer/exotic-plants/exotic-plants.component';
import { HomeComponent } from './home/home.component';
import { OliveTreesComponent } from './offer/olive-trees/olive-trees.component';
import { PalmsComponent } from './offer/palms/palms.component';
import { PalmDetailsComponent } from './offer/palms/palm-details/palm-details.component';
import { YuccasDetailsComponent } from './offer/yuccas/yuccas-details/yuccas-details.component';
import { OfferComponent } from './offer/offer.component';
import { PlantsAtCustomersComponent } from './plants-at-customers/plants-at-customers.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ExoticPlantsDetailsComponent } from './offer/exotic-plants/exotic-plants-details/exotic-plants-details.component';
import { OliveTreesDetailsComponent } from './offer/olive-trees/olive-trees-details/olive-trees-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'o_nas', component: AboutComponent },
  { path: 'oferta', component: OfferComponent },
  { path: 'rosliny_u_klientow', component: PlantsAtCustomersComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'oferta/palmy', component: PalmsComponent },
  { path: 'oferta/palmy/szczegoly', component: PalmDetailsComponent },
  { path: 'oferta/rosliny_egzotyczne', component: ExoticPlantsComponent },
  { path: 'oferta/rosliny_egzotyczne/szczegoly', component: ExoticPlantsDetailsComponent },
  { path: 'oferta/jukki', component: YuccasComponent },
  { path: 'oferta/jukki/szczegoly', component: YuccasDetailsComponent },
  { path: 'oferta/drzewa_oliwne', component: OliveTreesComponent },
  { path: 'oferta/drzewa_oliwne/szczegoly', component: OliveTreesDetailsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
