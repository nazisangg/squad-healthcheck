import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  constructor() { }

  ngOnInit() {
  }

  name() {
    return this.question.name;
  }

  title() {
    return this.question.question;
  }

  awesome() {
    return this.question.awesome;
  }

  crappy() {
    return this.question.crappy;
  }

  red() {
    console.log(":(");
  }

  green() {
    console.log(":)");
  }

  yellow() {
    console.log(":|");
  }
}
