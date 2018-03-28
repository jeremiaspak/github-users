import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  SearchBarComponent,
  ButtonComponent
} from '..';

describe('Component: SearchBar', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        SearchBarComponent,
        ButtonComponent,
      ]
    });

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled initially', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const hostElement: HTMLElement = debugElement.nativeElement;
    const submit: HTMLButtonElement = hostElement.querySelector('button');

    expect(submit.disabled).toBe(true);
  });

  it('submit button should be enabled if search input is filled', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const hostElement: HTMLElement = debugElement.nativeElement;
    const submit: HTMLButtonElement = hostElement.querySelector('button');
    const input: HTMLButtonElement = hostElement.querySelector('input');
    const instance = fixture.debugElement.componentInstance;

    instance.form.controls['search'].setValue('Mock Value');
    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(submit.disabled).toBe(false);
  });
});
