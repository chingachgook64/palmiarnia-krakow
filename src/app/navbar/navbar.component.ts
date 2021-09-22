import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {

  }

  scrollToElement(elementId: string): void {
    this.scroller.scrollToAnchor(elementId);
  }

}
