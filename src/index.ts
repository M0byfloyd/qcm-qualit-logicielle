import { questions } from './questions' 

export function randomTabItem(arr) {
    const selectedQuestions = [];

    for (let i = 0; i < 30; i++) {
        const number = Math.round(Math.random() * arr.length - 1);
        selectedQuestions.push(questions[number]);
    }
    
    return selectedQuestions;
}
