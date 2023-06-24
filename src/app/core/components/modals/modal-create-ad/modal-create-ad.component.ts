import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-modal-create-ad',
  templateUrl: './modal-create-ad.component.html',
  styleUrls: ['./modal-create-ad.component.css']
})
export class ModalCreateAdComponent {
  constructor(private router:Router){}
  @Output() closeModal = new EventEmitter<void>();



  preventEventPropagation(event: Event): void {
    event.stopPropagation();
  }
  emitCloseModalEvent() {
    this.closeModal.emit();
  }
  navigate(){
   this.router.navigate(['publish/stage-2/step1'])
    }
}
