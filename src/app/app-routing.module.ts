import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitrusesComponent } from './offer/citruses/citruses.component';
import { ExoticTreesComponent } from './offer/exotic-trees/exotic-trees.component';
import { HomeComponent } from './home/home.component';
import { OliveTreesComponent } from './offer/olive-trees/olive-trees.component';
import { PalmsComponent } from './offer/palms/palms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'palmy', component: PalmsComponent },
  { path: 'roslinyEgzotyczne', component: ExoticTreesComponent },
  { path: 'cytrusy', component: CitrusesComponent },
  { path: 'drzewaOliwne', component: OliveTreesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
