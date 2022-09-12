import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/animations/fadeIn';
import { ModalConfig } from '../types/modal-config.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeIn],
})
export class ModalComponent implements OnInit {


  config: ModalConfig;
  constructor() {}

  ngOnInit(): void {}
}
