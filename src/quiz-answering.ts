interface Respondant {
    id: string;
}

interface Quiz {
    id: string;
    mcqId: string;
    subsetOfQuestions: Question [];
}

interface Answer {
    id: string;
    respondantId: string;
    quizzId: string;
    questionId: string; // References other context/model
    choicesIds: string []; // References other context/model
}