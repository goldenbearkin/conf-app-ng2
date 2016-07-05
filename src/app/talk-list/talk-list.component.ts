import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { TalkComponent } from './talk/talk.component'

export interface Talk {
  topic: string;
  speaker: string;
  visible: boolean;
}

// import { Record } from 'immutable'

// interface T {
//     topic: string;
//     speaker: string;
//     visible: boolean;
// }

// const R: {new(p:T): T} = <any>Record({
//     topic: null,
//     speaker: null,
//     visible: null
// });

// export class Talk extends R {}

@Component({
  moduleId: module.id,
  selector: 'app-talk-list',
  templateUrl: 'talk-list.component.html',
  styleUrls: ['talk-list.component.css'],
  directives: [TalkComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalkListComponent implements OnInit, OnChanges {
  @Input() speaker: string = '';
  talks: Talk[] = [];

  ngOnInit() {

    const tmp = [
      {
        topic: "Intro to Flux and Redux",
        speaker: "Joseph",
        visible: true
      },
      {
        topic: "OneSky's take on using redux with AngularJs",
        speaker: "Roger",
        visible: true
      },
      {
        topic: "Why Functional Programming is so good with Scala?",
        speaker: "Cherry",
        visible: true
      },
      {
        topic: "Stuff at our Startup powered by Scala",
        speaker: "Jimmy",
        visible: true
      },
      {
        topic: "Intro to AWS Lambda, when to use?",
        speaker: "Vincent",
        visible: true
      },
      {
        topic: "Managing Lambda with Apex",
        speaker: "Roger",
        visible: true
      },
      {
        topic: "Angular2 vs ReactJS",
        speaker: "Jason",
        visible: true
      }
    ]

    tmp.forEach(e => {
      this.talks.push(e)
      // this.talks.push(new Talk(e));

    })
    
  }

  ngOnChanges() {
    this.talks.forEach(e => {
      if (this.speaker === '' || this.speaker === e.speaker) {
        e.visible = true;
      } else {
        e.visible = false;
      }
    })

    // this.talks.forEach((e, i) => {
    //   if (this.speaker === '' || e.speaker === this.speaker) {
    //     this.talks[i] = {
    //       topic: e.topic,
    //       speaker: e.speaker,
    //       visible: true 
    //     };
    //   } else {
    //     this.talks[i] = {
    //       topic: e.topic,
    //       speaker: e.speaker,
    //       visible: false
    //     };
    //   }
    // })
  }

}
