import { Injectable, EventEmitter } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class SwUpdateService {
  updatesAvailable = new EventEmitter<any>();

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      this.updatesAvailable.emit();
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
