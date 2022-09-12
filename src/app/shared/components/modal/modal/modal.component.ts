import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/shared/animations/fade';
import { ModalConfig } from '../types/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {


  config: ModalConfig;
  constructor() {}

  ngOnInit(): void {}
}
