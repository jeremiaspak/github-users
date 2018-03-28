import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  closed = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  onCloseClick() {
    this.closed.emit();
  }
}
