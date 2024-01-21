const scienceAndNatureQuestions = [
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { answer: "Earth", isCorrect: false },
      { answer: "Jupiter", isCorrect: true },
      { answer: "Mars", isCorrect: false },
      { answer: "Venus", isCorrect: false },
    ],
  },
  {
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: [
      { answer: "Oxygen", isCorrect: false },
      { answer: "Nitrogen", isCorrect: false },
      { answer: "Carbon Dioxide", isCorrect: true },
      { answer: "Hydrogen", isCorrect: false },
    ],
  },
  {
    question: "What is the powerhouse of the cell?",
    options: [
      { answer: "Nucleus", isCorrect: false },
      { answer: "Mitochondria", isCorrect: true },
      { answer: "Endoplasmic Reticulum", isCorrect: false },
      { answer: "Golgi Apparatus", isCorrect: false },
    ],
  },
  {
    question: "In which layer of the Earth's atmosphere do we find the ozone layer?",
    options: [
      { answer: "Troposphere", isCorrect: false },
      { answer: "Stratosphere", isCorrect: true },
      { answer: "Mesosphere", isCorrect: false },
      { answer: "Thermosphere", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    options: [
      { answer: "H2O", isCorrect: true },
      { answer: "CO2", isCorrect: false },
      { answer: "O2", isCorrect: false },
      { answer: "N2", isCorrect: false },
    ],
  },
];

const generalKnowledgeQuestions = [
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
      { answer: "China", isCorrect: false },
      { answer: "South Korea", isCorrect: false },
      { answer: "Japan", isCorrect: true },
      { answer: "Vietnam", isCorrect: false },
    ],
  },
  {
    question: "What is the capital city of France?",
    options: [
      { answer: "Berlin", isCorrect: false },
      { answer: "Madrid", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Rome", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { answer: "Earth", isCorrect: false },
      { answer: "Mars", isCorrect: true },
      { answer: "Jupiter", isCorrect: false },
      { answer: "Saturn", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { answer: "Charles Dickens", isCorrect: false },
      { answer: "William Shakespeare", isCorrect: true },
      { answer: "Jane Austen", isCorrect: false },
      { answer: "Mark Twain", isCorrect: false },
    ],
  },
  {
    question: "In what year did the Titanic sink?",
    options: [
      { answer: "1912", isCorrect: true },
      { answer: "1905", isCorrect: false },
      { answer: "1920", isCorrect: false },
      { answer: "1935", isCorrect: false },
    ],
  },
];

const technologyAndComputersQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      { answer: "Hyper Text Markup Language", isCorrect: true },
      { answer: "Highly Typed Machine Learning", isCorrect: false },
      { answer: "Home Tool Management Language", isCorrect: false },
      { answer: "Hyperlink and Text Management Language", isCorrect: false },
    ],
  },
  {
    question: "Which programming language is known for its use in web development and can be run in a web browser?",
    options: [
      { answer: "Java", isCorrect: false },
      { answer: "Python", isCorrect: false },
      { answer: "JavaScript", isCorrect: true },
      { answer: "C++", isCorrect: false },
    ],
  },
  {
    question: "What is the primary function of a database management system (DBMS)?",
    options: [
      { answer: "Graphic Design", isCorrect: false },
      { answer: "Data Storage and Retrieval", isCorrect: true },
      { answer: "Text Editing", isCorrect: false },
      { answer: "Network Security", isCorrect: false },
    ],
  },
  {
    question: "Who is often referred to as the 'father of computers'?",
    options: [
      { answer: "Bill Gates", isCorrect: false },
      { answer: "Charles Babbage", isCorrect: true },
      { answer: "Alan Turing", isCorrect: false },
      { answer: "Steve Jobs", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of CSS in web development?",
    options: [
      { answer: "Client-Side Scripting", isCorrect: false },
      { answer: "Computer Style Sheets", isCorrect: false },
      { answer: "Cascading Style Sheets", isCorrect: true },
      { answer: "Centralized Style Settings", isCorrect: false },
    ],
  },
];

const moviesAndTVShowsQuestions = [
  {
    question: "Who directed the movie 'Inception'?",
    options: [
      { answer: "Christopher Nolan", isCorrect: true },
      { answer: "Steven Spielberg", isCorrect: false },
      { answer: "Quentin Tarantino", isCorrect: false },
      { answer: "Martin Scorsese", isCorrect: false },
    ],
  },
  {
    question: "In the TV show 'Friends,' what is the name of Ross Geller's second wife?",
    options: [
      { answer: "Rachel Green", isCorrect: false },
      { answer: "Monica Geller", isCorrect: false },
      { answer: "Janice Litman", isCorrect: true },
      { answer: "Emily Waltham", isCorrect: false },
    ],
  },
  {
    question: "Which actor played the character Tony Stark in the 'Iron Man' film series?",
    options: [
      { answer: "Chris Hemsworth", isCorrect: false },
      { answer: "Robert Downey Jr.", isCorrect: true },
      { answer: "Chris Evans", isCorrect: false },
      { answer: "Mark Ruffalo", isCorrect: false },
    ],
  },
  {
    question: "What is the name of the fictional continent in the TV series 'Game of Thrones'?",
    options: [
      { answer: "Westeros", isCorrect: true },
      { answer: "Essos", isCorrect: false },
      { answer: "Sothoryos", isCorrect: false },
      { answer: "Dorne", isCorrect: false },
    ],
  },
  {
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    options: [
      { answer: "1917", isCorrect: false },
      { answer: "Parasite", isCorrect: true },
      { answer: "Once Upon a Time in Hollywood", isCorrect: false },
      { answer: "Joker", isCorrect: false },
    ],
  },
];
const sportsQuestions = [
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: [
      { answer: "Germany", isCorrect: false },
      { answer: "Brazil", isCorrect: false },
      { answer: "France", isCorrect: true },
      { answer: "Spain", isCorrect: false },
    ],
  },
  {
    question: "Who holds the record for the most Grand Slam singles titles in tennis?",
    options: [
      { answer: "Roger Federer", isCorrect: false },
      { answer: "Serena Williams", isCorrect: false },
      { answer: "Rafael Nadal", isCorrect: false },
      { answer: "Margaret Court", isCorrect: true },
    ],
  },
  {
    question: "In which year did Usain Bolt set the world record for the 100 meters sprint?",
    options: [
      { answer: "2008", isCorrect: false },
      { answer: "2009", isCorrect: true },
      { answer: "2012", isCorrect: false },
      { answer: "2016", isCorrect: false },
    ],
  },
  {
    question: "Which team has won the most NBA championships in history?",
    options: [
      { answer: "Los Angeles Lakers", isCorrect: true },
      { answer: "Chicago Bulls", isCorrect: false },
      { answer: "Boston Celtics", isCorrect: false },
      { answer: "Golden State Warriors", isCorrect: false },
    ],
  },
  {
    question: "Who is the all-time leading goal scorer in the history of FIFA World Cup tournaments?",
    options: [
      { answer: "Pele", isCorrect: false },
      { answer: "Diego Maradona", isCorrect: false },
      { answer: "Miroslav Klose", isCorrect: true },
      { answer: "Lionel Messi", isCorrect: false },
    ],
  },
];






export const categories = [
  {
    category: "Science And Nature",
    questions: scienceAndNatureQuestions
  },
  {
    category: "General Knowledge",
    questions: generalKnowledgeQuestions
  },
  {
    category: "Technology And Computers",
    questions: technologyAndComputersQuestions
  },
  {
    category: "Movies And TVShows",
    questions: moviesAndTVShowsQuestions
  },
  {
    category: "Sports",
    questions: sportsQuestions
  }
];
