import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  constructor(private db: AngularFireDatabase) {
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

  private getRef() {
    return this.db.database
      .ref("survey")
      .child("foo")
      .child("question")
      .child(this.question.name)
      .child("responses")
      .child("session")
      .child("foo");
  }

  red() {
    this.getRef().set("red");

    console.log(":(");
  }

  green() {
    this.getRef().set("green");

    console.log(":)");
  }

  yellow() {
    this.getRef().set("yellow");

    console.log(":|");
  }
}
