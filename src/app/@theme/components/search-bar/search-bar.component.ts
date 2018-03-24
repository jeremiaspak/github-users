import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() label: string;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'search': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.search.emit(this.form.get('search').value);
  }
}
