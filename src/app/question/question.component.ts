import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Question} from "../question";

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  onVoted = new EventEmitter<string>();

  constructor() {
  }

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
    this.onVoted.emit("red");
  }

  green() {
    this.onVoted.emit("green");
  }

  yellow() {
    this.onVoted.emit("yellow");
  }
}
