import { questions } from './questions';
import { randomTabItem } from './index'

it("questionText", function () {
  randomTabItem(questions);
});