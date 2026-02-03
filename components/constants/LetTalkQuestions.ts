export interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

export interface LetTalkQuestionsProps {
  title: string;
  items: QuestionItem[];
}

export const questions: QuestionItem[] = [
  {
    id: "1",
    question: "What are the signs of a hormonal imbalance?",
    answer:
      "Hormonal imbalances can cause symptoms like fatigue, weight changes, mood swings, irregular periods, hair loss, acne, and difficulty sleeping. The symptoms vary depending on which gland or hormone is affected.",
  },
  {
    id: "2",
    question: "Can I manage diabetes without medication?",
    answer:
      "Some people may manage early diabetes through diet, exercise, and lifestyle changes, but medical guidance is essential.",
  },
  {
    id: "3",
    question: "How do I know if my child has a growth problem?",
    answer:
      "If growth seems delayed compared to peers, consult an endocrinologist for proper evaluation.",
  },
  {
    id: "4",
    question: "Are thyroid problems common?",
    answer:
      "Yes, thyroid disorders are common and can affect metabolism, energy, and mood.",
  },
  {
    id: "5",
    question: "Can PCOS be cured?",
    answer:
      "PCOS cannot be cured completely, but symptoms can be effectively managed.",
  },
];
