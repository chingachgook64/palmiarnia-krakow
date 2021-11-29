import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-citruses',
  templateUrl: './yuccas.component.html',
  styleUrls: ['./yuccas.component.scss']
})
export class YuccasComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  yuccasData = this.dataService.getAllYuccasData();

  ngOnInit(): void {
  }

  goToYuccaDetails(name: string) {
    this.router.navigate(['oferta/jukki/szczegoly'], { queryParams: { name: `${name}` }, queryParamsHandling: 'merge' });
  }


}
