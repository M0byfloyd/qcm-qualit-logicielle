export function randomTabItem(arr) {
    const selectedQuestions = [];

    for (let i = 0; i < 30; i++) {
        const number = Math.round(Math.random() * arr.length - 1);
        selectedQuestions.push(arr[number]);
    }
    
    return selectedQuestions;
}
