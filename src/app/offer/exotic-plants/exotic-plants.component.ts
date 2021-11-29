import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-exotic-plants',
  templateUrl: './exotic-plants.component.html',
  styleUrls: ['./exotic-plants.component.scss']
})
export class ExoticPlantsComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  exoticPlantsData = this.dataService.getAllExoticPlantsData();

  ngOnInit(): void {
  }

  goToExoticPlantDetails(name: string) {
    this.router.navigate(['oferta/rosliny_egzotyczne/szczegoly'], { queryParams: { name: `${name}` }, queryParamsHandling: 'merge' });
  }

}
