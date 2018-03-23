import { NgModule } from '@angular/core';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    ThemeModule,
  ],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class HomeModule { }
