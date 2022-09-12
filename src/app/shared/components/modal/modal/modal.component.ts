import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';
import { ModalRef } from '../models/modal-ref';
import { ModalConfig } from '../types/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {

  modalRef: ModalRef;
  config: ModalConfig;
  constructor() {}

  ngOnInit(): void {}
}
