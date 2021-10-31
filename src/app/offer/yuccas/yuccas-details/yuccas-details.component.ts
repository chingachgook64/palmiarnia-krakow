import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-yuccas-details',
  templateUrl: './yuccas-details.component.html',
  styleUrls: ['./yuccas-details.component.scss']
})
export class YuccasDetailsComponent implements OnInit {

  name: string = "";
  yuccaData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.name = params.name;

      }
      );

    this.yuccaData = this.dataService.getYuccaData(this.name);
  }

}
