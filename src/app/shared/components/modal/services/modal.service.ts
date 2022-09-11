import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
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
    const componenRef = this.createComponenRef();
    componenRef.instance.config = config;
    return new ModalRef(componenRef);
  }

  createComponenRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  close(): void {
    this.componentRef.destroy();
  }
}
