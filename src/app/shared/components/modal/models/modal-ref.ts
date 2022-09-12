import { ComponentRef } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    this.componentRef.destroy();
  }
}
