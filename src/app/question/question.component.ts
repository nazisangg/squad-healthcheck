import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  userId: any;

  @Input()
  question: Question;

  constructor(private db: AngularFireDatabase,
              private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.userId = user.uid;
      } else {
        this.userId = null;
      }
    })
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

  private getSurveyQuestionRef() {
    return this.db.app.database()
      .ref("survey")
      .child("foo")
      .child("responses")
      .child(this.userId)
      .child(this.question.name);
  }

  private getResponseRef() {
    return this.db.app.database()
      .ref("responses")
      .child("foo")
      .child(this.question.name);
  }

  red() {
    this.storeValue("red");

    console.log(":(");
  }

  private storeValue(val: string) {
    if (this.userId) {
      this.getSurveyQuestionRef().set(val);
    }
  }

  green() {
    this.storeValue("green");

    console.log(":)");
  }

  yellow() {
    this.storeValue("yellow");

    console.log(":|");
  }
}
