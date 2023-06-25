import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/core/services/app.service';
import { apartment } from 'src/app/data/interfaces';

@Component({
  selector: 'app-modal-create-ad',
  templateUrl: './modal-create-ad.component.html',
  styleUrls: ['./modal-create-ad.component.css']
})
export class ModalCreateAdComponent {
  constructor(private appSvc:AppService){}
  @Output() closeModal = new EventEmitter<void>();
  preventEventPropagation(event: Event): void {
    event.stopPropagation();
  }
  emitCloseModalEvent() {
    this.closeModal.emit();
  }
  navigate(){
    this.appSvc.navigate('publish/stage-2/step1')
    }
}
