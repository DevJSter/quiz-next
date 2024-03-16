export const quiz = {
  totalQuestions: 14,
  category: {
    aspiration: 0,
    financialFitness: 0,
    energyManagement: 0,
    precision: 0,
    leadership: 0,
    connection: 0,
    selfExpertise: 0,
  },
  questions: [
    {
      id: 1,
      category: "aspiration",
      question: "Which statements corresponds to your financial fitness?",
      answers: [
        {
          answer: "I let financial stress affect me daily",
          updateCategory: () => {
            quiz.category.financialFitness--;
          },
        },
        {
          answer: "I often worry about my present and future finances",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
        {
          answer: "I am always on top of  my game when it comes to financial planning",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
      ],
    },
    {
      id: 2,
      category: "aspiration",
      question: "Which statement best corresponds to your level of confidence?",
      answers: [
        {
          answer: "I am a confident person",
          updateCategory: () => {
            quiz.category.aspiration++;
          },
        },
        {
          answer: "I am always nervous and unsure of myself",
          updateCategory: () => {
            quiz.category.aspiration--;
          },
        },
        {
          answer: "I struggle with unconfidence quite often",
          updateCategory: () => {
            quiz.category.aspiration--;
          },
        },
      ],
    },
    {
      id: 3,
      category: "aspiration",
      question: "Which Statement best corresponds to your levels of empathy?",
      answers: [
        {
          answer: "I can easily relate to people's struggles",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "Empathising with others is an easy task for me",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I can be empathetic to some but not to all",
          updateCategory: () => {
            quiz.category.aspiration--;
          },
        },
      ],
    },
    {
      id: 4,
      category: "aspiration",
      question: "Which statements best correspond to your ability to focus?",
      answers: [
        {
          answer: "Once I am focused no one can move me.",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer: "I am aware of some distractions",
          updateCategory: () => {
            quiz.category.energyManagement++;
          },
        },
        {
          answer: "I can never win over my distractions",
          updateCategory: () => {
            quiz.category.leadership--;
          },
        },
      ],
    },
    {
      id: 5,
      category: "financialFitness",
      question:
        "Which statement best corresponds to your ability to maintain boundaries?",
      answers: [
        {
          answer:
            "I have a clear picture of what boundaries: physical and emotional look alike",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
        {
          answer: "I feel people do not respect my boundaries",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
        {
          answer:
            "I can maintain boundaries with some but struggle with others",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
      ],
    },
    {
      id: 6,
      category: "financialFitness",
      question: "Which statement best corresponds to your career goals?",
      answers: [
        {
          answer:
            "I know what my goals are and I am actively working towards them",
          updateCategory: () => {
            quiz.category.aspiration++;
          },
        },
        {
          answer:
            "It's getting slightly difficult to have a consistent version of what goals I want to achieve.",
          updateCategory: () => {
            quiz.category.aspiration--;
          },
        },
        {
          answer:
            "I struggle a lot with what I want to do and how I want to achieve it",
          updateCategory: () => {
            quiz.category.selfExpertise++;
          },
        },
      ],
    },
    {
      id: 7,
      category: "energyManagement",
      question: "Which statement best corresponds to your energy levels?",
      answers: [
        {
          answer: "I am energized to tackle my day",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer: "I can get tired easily",
          updateCategory: () => {
            quiz.category.energyManagement++;
          },
        },
        {
          answer: "I don't know why I'm always exhausted",
          updateCategory: () => {
            quiz.category.energyManagement--;
          },
        },
      ],
    },
    {
      id: 8,
      category: "energyManagement",
      question: "Which statement best corresponds to your spending habits?",
      answers: [
        {
          answer: "I worry about every single purchase",
          updateCategory: () => {
            quiz.category.financialFitness--;
          },
        },
        {
          answer:
            "I prioritize bills and savings and spend on an as-needed basis",
          updateCategory: () => {
            quiz.category.financialFitness++;
          },
        },
        {
          answer: "I am impulsive in my spending and rarely keep track of it",
          updateCategory: () => {
            quiz.category.energyManagement++;
            quiz.category.leadership++;
          },
        },
      ],
    },
    {
      id: 9,
      category: "precision",
      question:
        "Which statement best corresponds to your perspective on challenges?",
      answers: [
        {
          answer: "It's hard to see the opportunity when I am challenged",
          updateCategory: () => {
            quiz.category.precision--;
            
          },
        },
        {
          answer: "I seize the opportunity in the challenges ahead",
          updateCategory: () => {
            quiz.category.precision++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "My life obstacles overwhelm me",
          updateCategory: () => {
            quiz.category.precision++;
          },
        },
      ],
    },
    {
      id: 10,
      category: "precision",
      question:
        "Which statements best corresponds to your personal and professional relationships?",
      answers: [
        {
          answer: "I feel safe being myself in all of my relationships",
          updateCategory: () => {
            quiz.category.precision++;
          },
        },
        {
          answer:
            "I am comfortable expressing my opinions and thoughts to others",
          updateCategory: () => {
            quiz.category.precision++;
          },
        },
        {
          answer:
            "I often hesitate in expressing my honest thoughts and feelings in some of my relationships",
          updateCategory: () => {
            quiz.category.precision++;
          },
        },
      ],
    },
    {
      id: 11,
      category: "leadership",
      question: "Which statements best corresponds to your level of optimism?",
      answers: [
        {
          answer: "I consider myself an optimistic person",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer: "I feel I am consistently jumping to negative thoughts",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer:
            "I try to be optimistic but it's hard to not drift towards the negatives",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
      ],
    },
    {
      id: 12,
      category: "leadership",
      question: "Which statement best corresponds to your trustworthiness?",
      answers: [
        {
          answer: "I feel everyone in my life easily trusts me",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer: "It takes effort to gain others' trust",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
        {
          answer: "Despite my best efforts, people don't trust me",
          updateCategory: () => {
            quiz.category.leadership++;
          },
        },
      ],
    },
    {
      id: 13,
      category: "connection",
      question: "Which statement best corresponds to your sleep hygiene?",
      answers: [
        {
          answer: "My sleep pattern keeps changing and it's irregular",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I have uncontrollable urges to fall asleep during the day",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I am mindful about the quality and quantity of my sleep",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
      ],
    },
    {
      id: 14,
      category: "connection",
      question:
        "Which statement best corresponds to your ability to stay calm?",
      answers: [
        {
          answer: "I am constantly a bundle of nerves",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I sometimes struggle to calm myself down",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I don't let situations disturb my calm",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
      ],
    },
  ],
};