import { Component } from '@angular/core';

import { FiltersComponent } from './filters/filters.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FiltersComponent]
})
export class AppComponent {
  speaker: string = '';

  getSpeaker(speaker) {
    this.speaker = speaker;
    console.log(`AppComponent: ${this.speaker}`);
  }
}
