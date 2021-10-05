import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-exotic-plants',
  templateUrl: './exotic-plants.component.html',
  styleUrls: ['./exotic-plants.component.scss']
})
export class ExoticPlantsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  exoticPlantsData = this.dataService.getExoticPlantsData();

  ngOnInit(): void {
  }

}
