import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-exotic-plants-details',
  templateUrl: './exotic-plants-details.component.html',
  styleUrls: ['./exotic-plants-details.component.scss']
})
export class ExoticPlantsDetailsComponent implements OnInit {

  name: string = "";
  exoticPlantData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.name = params.name;

      }
      );

    this.exoticPlantData = this.dataService.getExoticPlantData(this.name);
  }

}
