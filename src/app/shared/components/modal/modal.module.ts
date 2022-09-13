import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FocusTrapDirective } from '../../directives/focus/focus-trap.directive';
import { FocusBackDirective } from '../../directives/focus-back/focus-back.directive';

@NgModule({
  declarations: [ModalComponent, FocusTrapDirective, FocusBackDirective],
  imports: [CommonModule],
  exports: [ModalComponent],
})
export class ModalModule {}
