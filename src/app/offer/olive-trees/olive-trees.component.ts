import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-olive-trees',
  templateUrl: './olive-trees.component.html',
  styleUrls: ['./olive-trees.component.scss']
})
export class OliveTreesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
