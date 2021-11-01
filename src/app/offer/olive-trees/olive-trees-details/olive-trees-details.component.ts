import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-olive-trees-details',
  templateUrl: './olive-trees-details.component.html',
  styleUrls: ['./olive-trees-details.component.scss']
})
export class OliveTreesDetailsComponent implements OnInit {

  name: string = "";
  oliveTreeData: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        this.name = params.name;

      }
      );

    this.oliveTreeData = this.dataService.getOliveTreeData(this.name);
  }

}
