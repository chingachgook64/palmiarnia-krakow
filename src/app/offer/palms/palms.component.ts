import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-palms',
  templateUrl: './palms.component.html',
  styleUrls: ['./palms.component.scss']
})
export class PalmsComponent implements OnInit {


  constructor(private dataService: DataService, private router: Router) { }

  palmsData = this.dataService.getAllPalmsData();

  ngOnInit(): void {

    window.scrollTo(0, 0);
  }

  goToPalmDetails(name: string) {
    this.router.navigate(['/oferta/palmy/szczegoly'], { queryParams: { name: `${name}` }, queryParamsHandling: 'merge' });
  }

}
