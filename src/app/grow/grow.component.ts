import { DOCUMENT } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, ViewEncapsulation, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll-core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-grow',
  templateUrl: './grow.component.html',
  styleUrls: ['./grow.component.scss']
})
/* https://github.com/zurfyx/angular-contents */
export class GrowComponent implements OnInit {
  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;
  
  constructor(private data: MenuDataService){}


  ngOnInit(): void {
    this.data.changeName(["Puzzling Potions","#F5B971", "puzzling-potions"], ["Pollinate", "#A9C5A8", "pollinate"], ["Warhawk", "#bde9f2", "warhawk-redesign"], ["Stardew Journal", "#CFB5D0", "stardew-journal"])
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
    this.subscription = this.data.currentN4.subscribe(n4 => this.n4 = n4)
  }


}

