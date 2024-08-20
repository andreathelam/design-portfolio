import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projectpopup',
  templateUrl: './projectpopup.component.html',
  styleUrls: ['./projectpopup.component.scss']
})
export class ProjectpopupComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Input() content: Array<{ type: string, value: string }> = [];

  @Output() closeModal = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent) {
    // Close the modal when clicking outside the modal div
    this.close();
  }



}
