// import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';

import { Talk } from '../talk-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-talk',
  templateUrl: 'talk.component.html',
  styleUrls: ['talk.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkComponent {
  @Input() talk: Talk;
}
