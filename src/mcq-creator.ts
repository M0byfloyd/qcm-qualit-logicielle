interface MCQ {
    id: string;
    poolOfQuestions: Question [];
    subsetSize: number;
}

interface Question {
    id: string;
    label: string;
    type: 'SINGLE_CHOICE_QUESTION' | 'MULTIPLE_CHOICES_QUESTION';
    choices: [];
}

interface Choice {
    id: string;
    label: string;
    isValid: boolean;
}