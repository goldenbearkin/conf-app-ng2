import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['filters.component.css']
})
export class FiltersComponent {
  @Output() speaker = new EventEmitter();

  onClick(inputValue) {
    this.speaker.emit(inputValue);
  }
}
