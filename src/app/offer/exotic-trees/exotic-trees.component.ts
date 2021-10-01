import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-exotic-trees',
  templateUrl: './exotic-trees.component.html',
  styleUrls: ['./exotic-trees.component.scss']
})
export class ExoticTreesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  exoticTreesData = this.dataService.getExoticTreesData();

  ngOnInit(): void {
  }

}
