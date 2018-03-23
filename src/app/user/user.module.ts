import { NgModule } from '@angular/core';

import { UserRoutingModule, routedComponents } from './user-routing.module';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  imports: [
    UserRoutingModule,
    ThemeModule,
  ],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class UserModule { }
