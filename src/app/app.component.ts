import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  ModalRef,
  ModalService,
} from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') modalTemplateRef: TemplateRef<any>;

  selectedTemplate: TemplateRef<any>;

  title = 'a11y-p2';
  firstName = 'Alberto';
  modalRef: ModalRef;

  constructor(private modalService: ModalService) {}

  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User details',
    });
  }
}
