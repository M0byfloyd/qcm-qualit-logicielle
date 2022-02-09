import { questions } from './questions';
import { randomTabItem } from './mcq-creator'

it("questionText", function () {
  randomTabItem(questions);
});