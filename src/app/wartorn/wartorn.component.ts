import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuDataService } from '../menu-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wartorn',
  templateUrl: './wartorn.component.html',
  styleUrls: ['./wartorn.component.scss']
})
export class WartornComponent implements OnInit {

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
      this.data.changeName(["Puzzling Potions","#F5B971", "puzzling-potions"], ["Pollinate", "#A9C5A8", "pollinate"], ["Stardew Journal", "#CFB5D0", "stardew-journal"], ["Project Cupid", "#CFB5D0", "project-cupid"])
      this.subscription = this.data.currentN1.subscribe(n1 => this.n1 = n1)
      this.subscription = this.data.currentN2.subscribe(n2 => this.n2 = n2)
      this.subscription = this.data.currentN3.subscribe(n3 => this.n3 = n3)
      this.subscription = this.data.currentN4.subscribe(n4 => this.n4 = n4)
  
      enlargeImg();
      closeImg();
    }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  
  
  
  }
  
  
  function enlargeImg() {
  }
  
  function closeImg() {
  }



