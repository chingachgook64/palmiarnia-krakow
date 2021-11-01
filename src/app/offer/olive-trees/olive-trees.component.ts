import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-olive-trees',
  templateUrl: './olive-trees.component.html',
  styleUrls: ['./olive-trees.component.scss']
})
export class OliveTreesComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  oliveTreesData = this.dataService.getAllOliveTreesData();


  ngOnInit(): void {
  }

  goToOliveTreeDetails(name: string) {
    this.router.navigate(['drzewa_oliwne/szczegoly'], { queryParams: { name: `${name}` }, queryParamsHandling: 'merge' });
  }

}
