import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrolltotop',
  templateUrl: './scrolltotop.component.html',
  styleUrls: ['./scrolltotop.component.scss']
})
export class ScrolltotopComponent implements OnInit {

  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 20;
  }

  constructor() { 

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const scrollButton = document.getElementById('scrollToTopButton');
  }



  
  scrollTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  }

}



