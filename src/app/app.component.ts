import { Component } from '@angular/core';
import { SwUpdateService } from './core/services/sw-update.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(
    private swUpdateService: SwUpdateService,
  ) {}
}
