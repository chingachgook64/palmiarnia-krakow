import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-palms',
  templateUrl: './palms.component.html',
  styleUrls: ['./palms.component.scss']
})
export class PalmsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  palmsData = this.dataService.getPalmsData();

  ngOnInit(): void {
  }

}
