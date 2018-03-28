import { Injectable, EventEmitter } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/observable/interval';
import { ModalService } from '../../@theme/components/modal/modal.service';

@Injectable()
export class SwUpdateService {

  constructor(
    updates: SwUpdate,
    modalService: ModalService
  ) {

    updates.available.subscribe(event => {
      modalService.show(
        'Update Available',
        'A new vesion of this app is available! Refresh to update.'
      );
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
