import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-citruses',
  templateUrl: './citruses.component.html',
  styleUrls: ['./citruses.component.scss']
})
export class CitrusesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
