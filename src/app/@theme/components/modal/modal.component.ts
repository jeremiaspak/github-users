import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  close = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  onCloseClick() {
    this.close.emit();
  }
}
