import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-citruses',
  templateUrl: './yuccas.component.html',
  styleUrls: ['./yuccas.component.scss']
})
export class YuccasComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
