import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { GrowComponent } from '../grow/grow.component';
import { MenuDataService } from '../menu-data.service';
import { StardewjournalComponent } from '../stardewjournal/stardewjournal.component';

@Component({
  selector: 'app-viewmoremenu',
  templateUrl: './viewmoremenu.component.html',
  styleUrls: ['./viewmoremenu.component.scss']
})
export class ViewmoremenuComponent implements OnInit, OnDestroy {

  @ViewChild(StardewjournalComponent) child;
  @ViewChild(GrowComponent) child2;

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;

  constructor(private data: MenuDataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
    this.subscription = this.data.currentN4.subscribe(n4 => this.n4 = n4)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
