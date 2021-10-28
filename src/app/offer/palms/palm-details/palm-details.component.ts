import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-palm-details',
  templateUrl: './palm-details.component.html',
  styleUrls: ['./palm-details.component.scss']
})
export class PalmDetailsComponent implements OnInit {

  name: string = "";
  palmData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.name = params.name;

      }
      );

    this.palmData = this.dataService.getPalmData(this.name);
  }
}
