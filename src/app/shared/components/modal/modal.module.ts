import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FocusTrapDirective } from '../../directives/focus/focus-trap.directive';

@NgModule({
  declarations: [ModalComponent, FocusTrapDirective],
  imports: [CommonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
