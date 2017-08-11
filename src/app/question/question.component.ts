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

  private getRef() {
    return firebase.database()
      .ref("survey")
      .child("foo")
      .child("question")
      .child(this.question.name)
      .child("responses");
  }

  red() {
    this.getRef().push("red");

    console.log(":(");
  }

  green() {
    this.getRef().push("green");
    
    console.log(":)");
  }

  yellow() {
    this.getRef().push("yellow");

    console.log(":|");
  }
}
