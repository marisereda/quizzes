import { ITask } from '../models/task';

export const tasks: ITask[] = [
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is Solid Snake&#039;s real name?',
    correct_answer: 'David',
    incorrect_answers: ['Solid Snake', 'John', 'Huey'],
  },
  {
    category: 'Entertainment: Board Games',
    type: 'multiple',
    difficulty: 'easy',
    question: 'How many dots are on a single die?',
    correct_answer: '21',
    incorrect_answers: ['24', '15', '18'],
  },
  {
    category: 'Entertainment: Music',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In an orchestra, what is the lowest member of the brass family?',
    correct_answer: 'Tuba',
    incorrect_answers: ['Trombone', 'Contrabass', 'Bassoon'],
  },
  {
    category: 'Entertainment: Cartoon & Animations',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'In &quot;The Amazing World of Gumball&quot;, who is the principal of Elmore Junior High?',
    correct_answer: 'Principal Brown',
    incorrect_answers: [
      'Principal Small',
      'Principal Brawn',
      'Principal Simeon',
    ],
  },
  {
    category: 'Science: Gadgets',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Which company developed the Hololens?',
    correct_answer: 'Microsoft',
    incorrect_answers: ['HTC', 'Oculus', 'Tobii'],
  },
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In CoD: Black Ops III, what is the name of the rogue A.I. antagonist?',
    correct_answer: 'Corvus',
    incorrect_answers: ['Cabal', 'Legion', 'Icarus'],
  },
  {
    category: 'General Knowledge',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Located in Chile, El Teniente is the world&#039;s largest underground mine for what metal?',
    correct_answer: 'Copper',
    incorrect_answers: ['Iron', 'Nickel', 'Silver'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:',
    correct_answer: 'A&#039; + B&#039;',
    incorrect_answers: [
      'A&#039;B + B&#039;A',
      'A&#039;B&#039;',
      'AB&#039; + AB',
    ],
  },
  {
    category: 'Sports',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?',
    correct_answer: '1-7',
    incorrect_answers: ['1-5', '1-6', '2-6'],
  },
  {
    category: 'History',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'John Moses Browning, the designer of the M1918 BAR (Browning Automatic Rifle) was a part of which religion?',
    correct_answer: 'Mormon',
    incorrect_answers: ['Catholic', 'Jewish', 'Atheist'],
  },
];
