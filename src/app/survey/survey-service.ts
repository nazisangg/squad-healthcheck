import { Injectable } from '@angular/core';
import { Survey } from "../survey";
import { Session } from "../session";
import { Question } from "../question";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SurveyService {

  constructor(
    private db: AngularFireDatabase,
    private session: Session
  ) {
  }

  getSurvey(id: string): Survey {
    //    return <Survey>this.db.database.ref("survey").child(id).toJSON();

    return new Survey(
      id,
      [
        new Question(
          "support",
          "Support",
          "We always get great support & help when we ask for it!",
          "We keep getting stuck because we can’t get the support & help that we ask for"),
        new Question(
          "pawn",
          "Pawns or Players",
          "We decide what to build and how to build it",
          "We are just pawns in a game of chess, with no influence over what we build or how we build it"),
        new Question(
          "mission",
          "Mission",
          "We know exactly why we are here, and we are really excited about it",
          "We have no idea why we are here, there is no high level picture or focus. Our so-called mission is completely unclear and uninspiring"),
        new Question(
          "code",
          "Health of codebase",
          "We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage",
          "Our code is a pile of dung, and technical debt is raging out of control"),
        new Question(
          "process",
          "Suitable process",
          "Our way of working fits us perfectly",
          "Our way of working sucks"),
        new Question(
          "value",
          "Delivery value",
          "We deliver great stuff! We’re proud of it and our stakeholders are really happy",
          "We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us"),
        new Question(
          "learn",
          "Learning",
          "We’re learning lots of interesting stuff all the time",
          "We never have time to learn anything"),
        new Question(
          "speed",
          "Speed",
          "We get stuff done really quickly. No waiting, no delays",
          "We never seem to get done with anything. We keep getting stuck or interrupted. Stories keep getting stuck on dependencies"),
        new Question(
          "release",
          "Easy to release",
          "Releasing is simple, safe, painless & mostly automated.",
          "Releasing is risky, painful, lots of manual work, and takes forever."),
        new Question(
          "fun",
          "Fun",
          "We love going to work, and have great fun working together",
          "Boooooooring")
      ]
    );
  }

  vote(survey: Survey, question: Question, vote: string) {
    console.log(`Vote: ${survey.id}.${question.name} => ${vote}`);

    var response = this.db.database
      .ref("survey-responses")
      .child(survey.id)
      .child("responses")
      .child(this.session.id)
      .child("question")
      .child(question.name);

    response.set(vote);
  }
}