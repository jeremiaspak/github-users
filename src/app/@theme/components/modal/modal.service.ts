import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  ComponentRef,
} from '@angular/core';

import { ModalComponent } from '..';

@Injectable()
export class ModalService {
  modalRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  show(title: string, text: string): void {
    this.modalRef = this.resolver
      .resolveComponentFactory(ModalComponent)
      .create(this.injector);

    this.modalRef.instance.title = title;
    this.modalRef.instance.text = text;
    this.modalRef.instance.closed.subscribe(() => {
        this.destroy();
      });

    this.appRef.attachView(this.modalRef.hostView);
    const domElem = (this.modalRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  destroy() {
    this.modalRef.instance.closed.unsubscribe();
    this.appRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
  }
}
