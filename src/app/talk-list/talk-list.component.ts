import { Component, OnInit } from '@angular/core';

import { TalkComponent } from './talk/talk.component'

export interface Talk {
  topic: string;
  speaker: string;
  visible: boolean;
}

@Component({
  moduleId: module.id,
  selector: 'app-talk-list',
  templateUrl: 'talk-list.component.html',
  styleUrls: ['talk-list.component.css'],
  directives: [TalkComponent]
})
export class TalkListComponent implements OnInit {
  talks: Talk[];

  ngOnInit() {
    this.talks = [
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
  }

}
