import { Question } from './question';

export class Survey {
  constructor(
    public id: string,
    public questions: Question[]
  ) {
  }
}
