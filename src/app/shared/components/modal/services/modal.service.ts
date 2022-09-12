import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';
import { BodyInjectorService } from 'src/app/shared/services/body-injector.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalRef } from '../models/modal-ref';
import { ModalConfig } from '../types/modal-config.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory: ComponentFactory<ModalComponent>;

  constructor(
    componenFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
  ) {
    this.componentFactory =
      componenFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  open(config: ModalConfig): ModalRef {
    const componenRef = this.createComponenRef();
    componenRef.instance.config = config;
    this.bodyInjector.stackBeforeAppRoot(componenRef);
    const modalRef = new ModalRef(componenRef);
    componenRef.instance.modalRef = modalRef;
    return modalRef;
  }

  createComponenRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}


