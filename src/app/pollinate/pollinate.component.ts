import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuDataService } from '../menu-data.service';

@Component({
  selector: 'app-pollinate',
  templateUrl: './pollinate.component.html',
  styleUrls: ['./pollinate.component.scss']
})
export class PollinateComponent implements OnInit {
  isModalVisible: boolean = false;
  modalTitle: string = '';
  modalContent: Array<{ type: string, value: string }> = [];

  n1:Array<string>;
  n2:Array<string>;
  n3:Array<string>;
  n4:Array<string>;
  subscription:Subscription;
  

  constructor(private data: MenuDataService, private renderer: Renderer2) { }

  openModal(title: string, content: Array<{ type: string, value: string }>) {
    this.isModalVisible = true;
    this.modalTitle = title;
    this.modalContent = content;
    this.renderer.addClass(document.documentElement, 'no-scroll');
  }

  closeModal() {
    this.isModalVisible = false;
    this.renderer.removeClass(document.documentElement, 'no-scroll');

  }

  ngOnInit(): void {
    this.data.changeName(["Stardew Journal", "#CFB5D0", "stardew-journal"], ["Surviving2020", "#F0B8BF", "surviving2020"], ["New World", "#dddddd", "new-world"], ["CATching Shrooms", "#dacfee", "catching-shrooms"])
    this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
    this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
    this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
    this.subscription = this.data.currentN4.subscribe(n4 => this.n4 = n4)



  }

}


