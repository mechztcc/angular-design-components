import {
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Injector
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalConfig } from '../types/modal-config.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componenFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {
    this.componentFactory =
      componenFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  open(config: ModalConfig): ModalRef {
    const componenRef = this.componentFactory.create(this.injector);
    return new ModalRef();
  }
}

export class ModalRef {
  close(): void {
    console.log('close called');
  }
}
