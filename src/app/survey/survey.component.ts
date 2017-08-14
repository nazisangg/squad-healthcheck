import { Component, OnInit } from '@angular/core';
import { Question } from "../question";
import { Survey } from "../survey";
import { SurveyService } from "./survey-service";

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [SurveyService]
})
export class SurveyComponent implements OnInit {
  private survey: Survey

  constructor(private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.survey = this.surveyService.getSurvey("foo");
  }

  onVoted(vote: string, question: Question) {
    this.surveyService.vote(this.survey, question, vote);
  }
}
