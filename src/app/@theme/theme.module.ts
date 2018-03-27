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
  ModalComponent,
} from './components';

import {
  ModalService
} from './components/modal/modal.service';

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
  ModalComponent,
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
  providers: [
    ModalService
  ],
  entryComponents: [ModalComponent]
})
export class ThemeModule { }
