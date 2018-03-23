import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  ButtonComponent,
  HeaderComponent,
  ListComponent,
  SearchBarComponent,
  TabsComponent,
} from './components';

const baseModules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
];

const components = [
  ButtonComponent,
  HeaderComponent,
  ListComponent,
  SearchBarComponent,
  TabsComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...baseModules,
  ],
  exports: [
    ...baseModules,
    ...components,
  ],
  providers: []
})
export class ThemeModule { }
