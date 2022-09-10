import { Injectable } from '@angular/core';
import { ModalConfig } from '../types/modal-config.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  open(config: ModalConfig) {
    console.log('open called');
    return new ModalRef();
  }
}

export class ModalRef {
  close(): void {
    console.log('close called');
  }
}
