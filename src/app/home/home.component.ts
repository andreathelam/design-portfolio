import { Component, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isModalVisible: boolean = false;
  modalTitle: string = '';
  modalContent: Array<{ type: string, value: string }> = [];


  constructor(private renderer: Renderer2) { }

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

    enlargeImg();
    closeImg();
   


    }

  }


  




function enlargeImg() {
}

function closeImg() {
}

