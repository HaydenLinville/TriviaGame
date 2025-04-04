
var questionArray = [
    {
        question: 'What is the capital of Japan?',
        correctAnswer: 'Tokyo',
        answers: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
        hasBeenAsked: false,
        id: 1
    },
    {
        question: 'Who painted the Mona Lisa?',
        correctAnswer: 'Leonardo da Vinci',
        answers: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        hasBeenAsked: false,
        id: 2
    },
    {
        question: 'What is the chemical symbol for gold?',
        correctAnswer: 'Au',
        answers: ["Au", "Ag", "Pb", "Fe"],
        hasBeenAsked: false,
        id: 3
    },
    {
        question: 'Which planet is known as the Red Planet?',
        correctAnswer: 'Mars',
        answers: ["Mars", "Jupiter", "Venus", "Saturn"],
        hasBeenAsked: false,
        id: 4
    },
    {
        question: 'How many continents are there on Earth?',
        correctAnswer: 'Seven',
        answers: ["Seven", "Five", "Six", "Eight"],
        hasBeenAsked: false,
        id: 5
    }, 
    {
        question: 'What is the largest ocean on Earth?',
        correctAnswer: 'Pacific Ocean',
        answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        hasBeenAsked: false,
        id: 6
    },
    {
        question: 'Who wrote the play Romeo and Juliet?',
        correctAnswer: 'William Shakespeare',
        answers: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        hasBeenAsked: false,
        id: 7
    },
    {
        question: 'What year did the Titanic sink?',
        correctAnswer: '1912',
        answers: ["1912", "1905", "1923", "1898"],
        hasBeenAsked: false,
        id: 8
    },
    {
        question: 'What is the fastest land animal?',
        correctAnswer: 'Cheetah',
        answers: ["Cheetah", "Lion", "Greyhound", "Horse"],
        hasBeenAsked: false,
        id: 9
    },
    {
        question: 'How many sides does a hexagon have?',
        correctAnswer: 'Six',
        answers: ["Six", "Five", "Seven", "Eight"],
        hasBeenAsked: false,
        id: 10
    }
];

var startingQueObj ={
    question: '',
    correctAnswer: '',
    answers: [''],
    hasBeenAsked: false,
    id: 0
}

var startHearts = [{id: 1, color:'#607d8b'}, {id: 2,  color:'#607d8b'}, {id:3, color:'#607d8b'}];

export  {questionArray, startHearts, startingQueObj};