import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalConfig } from '../types/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  config: ModalConfig;

  constructor() {}

  ngOnInit(): void {}
}
