import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
  @Input() items: {}[] =[];
  @Input() label: string;
  @Output() selected =  new EventEmitter<string>();

  activeTab: string;

  constructor() { }

  ngOnInit() {
    this.setActiveTab(this.items[0]);
  }

  onClick(tab) {
    this.setActiveTab(tab);
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.selected.emit(tab);
  }
}
