interface MCQ {
    id: string;
    poolOfQuestions: Question [];
}


interface Question {
    id: string;
    label: string;
    type: "SINGLE CHOICE_QUESTION" | "MULTIPLE_CHOICES QUESTION";
    choices: Choice[];
}

interface Choice {
    id: string;
    label: string;
    isValid: boolean;
}