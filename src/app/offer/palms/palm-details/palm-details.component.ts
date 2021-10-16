import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palm-details',
  templateUrl: './palm-details.component.html',
  styleUrls: ['./palm-details.component.scss']
})
export class PalmDetailsComponent implements OnInit {

  name: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.name = params.name;

      }
      );
  }
}
