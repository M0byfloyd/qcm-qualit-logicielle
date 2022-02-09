interface Respondant {
    id: string;
}

interface Quizz {
    id: string;
    mcqId: string;
    subsetOfQuestions: Question [];
}

interface answer {
    id: string;
    respondantId: string;
    quizzId: string;
    questionId: string;
    choicesIds: string[];
}