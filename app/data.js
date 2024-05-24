export const quiz = {
  totalQuestions: 20,
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
      category: "financialFitness",
      question: "Which statement corresponds to your financial fitness?",
      answers: [
        {
          answer: "I let financial stress affect me daily",
          updateCategory: () => {
            quiz.category.financialFitness--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I often worry about my present and future finances",
          updateCategory: () => {
            quiz.category.financialFitness++;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I am always on top of my game when it comes to financial planning",
          updateCategory: () => {
            quiz.category.financialFitness++;
            quiz.category.leadership++;
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
            quiz.category.leadership++;
          },
        },
        {
          answer: "I am always nervous and unsure of myself",
          updateCategory: () => {
            quiz.category.aspiration--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I struggle with unconfidence quite often",
          updateCategory: () => {
            quiz.category.aspiration--;
            quiz.category.connection--;
          },
        },
      ],
    },
    {
      id: 3,
      category: "connection",
      question: "Which statement best corresponds to your levels of empathy?",
      answers: [
        {
          answer: "I can easily relate to people's struggles",
          updateCategory: () => {
            quiz.category.connection++;
            quiz.category.aspiration++;
          },
        },
        {
          answer: "Empathizing with others is an easy task for me",
          updateCategory: () => {
            quiz.category.connection++;
          },
        },
        {
          answer: "I can be empathetic to some but not to all",
          updateCategory: () => {
            quiz.category.connection--;
          },
        },
      ],
    },
    {
      id: 4,
      category: "focus",
      question: "Which statement best corresponds to your ability to focus?",
      answers: [
        {
          answer: "Once I am focused, no one can move me.",
          updateCategory: () => {
            quiz.category.precision++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "I am aware of some distractions",
          updateCategory: () => {
            quiz.category.energyManagement++;
            quiz.category.precision--;
          },
        },
        {
          answer: "I can never win over my distractions",
          updateCategory: () => {
            quiz.category.precision--;
            quiz.category.energyManagement--;
          },
        },
      ],
    },
    {
      id: 5,
      category: "boundaries",
      question: "Which statement best corresponds to your ability to maintain boundaries?",
      answers: [
        {
          answer: "I have a clear picture of what boundaries: physical and emotional look like",
          updateCategory: () => {
            quiz.category.selfExpertise++;
            quiz.category.connection++;
          },
        },
        {
          answer: "I feel people do not respect my boundaries",
          updateCategory: () => {
            quiz.category.selfExpertise--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I can maintain boundaries with some but struggle with others",
          updateCategory: () => {
            quiz.category.selfExpertise--;
            quiz.category.connection--;
          },
        },
      ],
    },
    {
      id: 6,
      category: "aspiration",
      question: "Which statement best corresponds to your career goals?",
      answers: [
        {
          answer: "I know what my goals are and I am actively working towards them",
          updateCategory: () => {
            quiz.category.aspiration++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "It's getting slightly difficult to have a consistent version of what goals I want to achieve.",
          updateCategory: () => {
            quiz.category.aspiration--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I struggle a lot with what I want to do and how I want to achieve it",
          updateCategory: () => {
            quiz.category.selfExpertise--;
            quiz.category.aspiration--;
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
            quiz.category.energyManagement++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "I can get tired easily",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I don't know why I'm always exhausted",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.precision--;
          },
        },
      ],
    },
    {
      id: 8,
      category: "financialFitness",
      question: "Which statement best corresponds to your spending habits?",
      answers: [
        {
          answer: "I worry about every single purchase",
          updateCategory: () => {
            quiz.category.financialFitness--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I prioritize bills and savings and spend on an as-needed basis",
          updateCategory: () => {
            quiz.category.financialFitness++;
            quiz.category.precision++;
          },
        },
        {
          answer: "I am impulsive in my spending and rarely keep track of it",
          updateCategory: () => {
            quiz.category.financialFitness--;
            quiz.category.energyManagement--;
            quiz.category.leadership--;
          },
        },
      ],
    },
    {
      id: 9,
      category: "precision",
      question: "Which statement best corresponds to your perspective on challenges?",
      answers: [
        {
          answer: "It's hard to see the opportunity when I am challenged",
          updateCategory: () => {
            quiz.category.precision--;
            quiz.category.leadership--;
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
            quiz.category.precision--;
            quiz.category.connection--;
          },
        },
      ],
    },
    {
      id: 10,
      category: "precision",
      question: "Which statement best corresponds to your personal and professional relationships?",
      answers: [
        {
          answer: "I feel safe being myself in all of my relationships",
          updateCategory: () => {
            quiz.category.connection++;
            quiz.category.precision++;
          },
        },
        {
          answer: "I am comfortable expressing my opinions and thoughts to others",
          updateCategory: () => {
            quiz.category.connection++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "I often hesitate in expressing my honest thoughts and feelings in some of my relationships",
          updateCategory: () => {
            quiz.category.connection--;
            quiz.category.leadership--;
          },
        },
      ],
    },
    {
      id: 11,
      category: "leadership",
      question: "Which statement best corresponds to your level of optimism?",
      answers: [
        {
          answer: "I consider myself an optimistic person",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.aspiration++;
          },
        },
        {
          answer: "I feel I am consistently jumping to negative thoughts",
          updateCategory: () => {
            quiz.category.leadership--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I try to be optimistic but it's hard to not drift towards the negatives",
          updateCategory: () => {
            quiz.category.leadership--;
            quiz.category.energyManagement--;
          },
        },
      ],
    },
    {
      id: 12,
      category: "trustworthiness",
      question: "Which statement best corresponds to your trustworthiness?",
      answers: [
        {
          answer: "I feel everyone in my life easily trusts me",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.connection++;
          },
        },
        {
          answer: "It takes effort to gain others' trust",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.precision++;
          },
        },
        {
          answer: "Despite my best efforts, people don't trust me",
          updateCategory: () => {
            quiz.category.leadership--;
            quiz.category.connection--;
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
            quiz.category.energyManagement--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I have uncontrollable urges to fall asleep during the day",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.precision--;
          },
        },
        {
          answer: "I am mindful about the quality and quantity of my sleep",
          updateCategory: () => {
            quiz.category.energyManagement++;
            quiz.category.selfExpertise++;
          },
        },
      ],
    },
    {
      id: 14,
      category: "calmness",
      question: "Which statement best corresponds to your ability to stay calm?",
      answers: [
        {
          answer: "I am constantly a bundle of nerves",
          updateCategory: () => {
            quiz.category.connection--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I sometimes struggle to calm myself down",
          updateCategory: () => {
            quiz.category.connection--;
            quiz.category.selfExpertise--;
          },
        },
        {
          answer: "I find it easy to stay calm even in stressful situations",
          updateCategory: () => {
            quiz.category.connection++;
            quiz.category.leadership++;
          },
        },
      ],
    },
    {
      id: 15,
      category: "adaptability",
      question: "Which statement best describes your ability to adapt to change?",
      answers: [
        {
          answer: "I thrive in new and changing environments",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.energyManagement++;
          },
        },
        {
          answer: "I feel stressed when faced with change",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.connection--;
          },
        },
        {
          answer: "I try to adapt but often struggle with changes",
          updateCategory: () => {
            quiz.category.precision--;
            quiz.category.selfExpertise--;
          },
        },
      ],
    },
    {
      id: 16,
      category: "goalSetting",
      question: "Which statement best describes your goal-setting habits?",
      answers: [
        {
          answer: "I set clear, achievable goals and work towards them",
          updateCategory: () => {
            quiz.category.aspiration++;
            quiz.category.precision++;
          },
        },
        {
          answer: "I set goals but often struggle to achieve them",
          updateCategory: () => {
            quiz.category.aspiration--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I rarely set goals for myself",
          updateCategory: () => {
            quiz.category.aspiration--;
            quiz.category.leadership--;
          },
        },
      ],
    },
    {
      id: 17,
      category: "selfDiscipline",
      question: "Which statement best describes your self-discipline?",
      answers: [
        {
          answer: "I am very disciplined and stick to my plans",
          updateCategory: () => {
            quiz.category.selfExpertise++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "I am somewhat disciplined but often falter",
          updateCategory: () => {
            quiz.category.selfExpertise--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I struggle to maintain discipline in my life",
          updateCategory: () => {
            quiz.category.selfExpertise--;
            quiz.category.precision--;
          },
        },
      ],
    },
    {
      id: 18,
      category: "communication",
      question: "Which statement best describes your communication skills?",
      answers: [
        {
          answer: "I communicate clearly and effectively",
          updateCategory: () => {
            quiz.category.connection++;
            quiz.category.leadership++;
          },
        },
        {
          answer: "I sometimes struggle to convey my thoughts",
          updateCategory: () => {
            quiz.category.connection--;
            quiz.category.energyManagement--;
          },
        },
        {
          answer: "I find it difficult to express myself",
          updateCategory: () => {
            quiz.category.connection--;
            quiz.category.precision--;
          },
        },
      ],
    },
    {
      id: 19,
      category: "timeManagement",
      question: "Which statement best describes your time management?",
      answers: [
        {
          answer: "I manage my time efficiently and meet deadlines",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.precision++;
          },
        },
        {
          answer: "I sometimes struggle to manage my time effectively",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.selfExpertise--;
          },
        },
        {
          answer: "I often miss deadlines and procrastinate",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.aspiration--;
          },
        },
      ],
    },
    {
      id: 20,
      category: "resilience",
      question: "Which statement best describes your resilience?",
      answers: [
        {
          answer: "I bounce back quickly from setbacks",
          updateCategory: () => {
            quiz.category.leadership++;
            quiz.category.selfExpertise++;
          },
        },
        {
          answer: "I need some time to recover from setbacks",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.aspiration--;
          },
        },
        {
          answer: "I find it hard to recover from setbacks",
          updateCategory: () => {
            quiz.category.energyManagement--;
            quiz.category.precision--;
          },
        },
      ],
    },
  ],
};