export interface QuestionItem {
  id: string;
  question: string;
  answer: string;
}

export interface LetTalkQuestionsProps {
  title: string;
  items: QuestionItem[];
}

export const letTalkQuestionsMap: Record<string, any[]> = {
  "/": [
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
  ],
  diabetes: [
    {
      id: "1",
      question: "What is the difference between Type 1 and Type 2 diabetes?",
      answer:
        "Type 1 is when the body stops making insulin; Type 2 is when the body doesn’t use insulin properly.",
    },
    {
      id: "2",
      question: "Is insulin the only treatment for diabetes?",
      answer:
        "No. Type 1 needs insulin, but Type 2 can be managed with lifestyle changes, pills, or insulin.",
    },
    {
      id: "3",
      question: "How often should I check my blood sugar levels?",
      answer:
        "It varies. Follow your doctor’s advice based on your condition and treatment.",
    },
    {
      id: "4",
      question: "What foods should I avoid if I have diabetes?",
      answer:
        "Avoid sugary foods, refined carbs, and unhealthy fats. Choose whole, low-GI foods.",
    },
    {
      id: "5",
      question: "Can children develop diabetes?",
      answer:
        "Yes. Kids can get Type 1, and increasingly Type 2 due to lifestyle factors.",
    },
  ],
  thyroid: [
    {
      id: "1",
      question: "What causes thyroid disorders?",
      answer:
        "Thyroid disorders can result from autoimmune diseases, iodine deficiency, thyroid nodules, or certain medications.",
    },
    {
      id: "2",
      question: "How are thyroid disorders diagnosed?",
      answer:
        "Diagnosis involves blood tests to measure thyroid hormone levels and, if needed, imaging such as ultrasound.",
    },
    {
      id: "3",
      question: "How often should thyroid function be monitored?",
      answer:
        "Typically, thyroid levels are checked every 6–12 months, or more often if treatment changes or symptoms worsen.",
    },
    {
      id: "4",
      question: "Can thyroid disorders affect pregnancy?",
      answer:
        "Yes, untreated thyroid issues may impact fertility and pregnancy, making early diagnosis and management essential.",
    },
    {
      id: "5",
      question: "What treatments are available for thyroid problems?",
      answer:
        "Treatments include hormone replacement therapy, medications to control hormone levels, or surgery in specific cases.",
    },
  ],
  obesity: [
    {
      id: "1",
      question: "Can obesity be reversed or managed effectively?",
      answer:
        "TYes, obesity can be managed and sometimes reversed through a combination of diet, exercise, medical treatments, and lifestyle modifications.",
    },
    {
      id: "2",
      question: "Are there safe medications for weight loss?",
      answer:
        "Yes, certain prescription medications can assist with appetite control or metabolism, but they must be used under strict medical supervision.",
    },
    {
      id: "3",
      question: "What medical treatments are available for obesity?",
      answer:
        "Available treatments include prescription drugs, hormone therapy, and, in some cases, surgical interventions like bariatric surgery.",
    },
    {
      id: "4",
      question: "Can obesity affect mental health?",
      answer:
        "Yes, obesity may contribute to low self-esteem, depression, and anxiety, which should be addressed alongside physical health for comprehensive care.",
    },
    {
      id: "5",
      question: "Can children and teens suffer from obesity?",
      answer:
        "Yes, obesity is increasingly common in children and adolescents, requiring timely diagnosis and early intervention to prevent long-term health issues.",
    },
  ],
  growth: [
    {
      id: "1",
      question: "How can I know if my child has a growth problem?",
      answer:
        "Regular checkups and growth charts help track if your child is growing at a normal rate.",
    },
    {
      id: "2",
      question: "Can growth problems be treated?",
      answer:
        "Yes. With proper diagnosis, treatment may include nutrition plans, supplements, or hormone therapy.",
    },
    {
      id: "3",
      question: "Do growth problems affect learning or behavior?",
      answer:
        "Sometimes. Low energy or low confidence from poor growth can affect school performance and social life.",
    },
    {
      id: "4",
      question: "Is short height always a growth problem?",
      answer:
        "Not always. Some children are naturally shorter due to family traits but are still healthy.",
    },
    {
      id: "5",
      question: "Will my child catch up in growth with treatment?",
      answer:
        "Many children improve with early diagnosis and proper care, though results depend on the cause.",
    },
  ],
  osteoporosis: [
    {
      id: "1",
      question: "How does endocrinology relate to osteoporosis?",
      answer:
        "Endocrinologists treat osteoporosis because it is often linked to hormonal imbalances affecting bone strength.",
    },
    {
      id: "2",
      question: "Which hormones affect bone health?",
      answer:
        "Thyroid, parathyroid, estrogen, testosterone, and vitamin D all play important roles in maintaining bone density.",
    },
    {
      id: "3",
      question: "Can osteoporosis be reversed?",
      answer:
        "Bone loss cannot usually be fully reversed, but treatments can slow progression and improve   bone strength.",
    },
    {
      id: "4",
      question: "What tests will an endocrinologist recommend?",
      answer:
        "Bone density scans, blood tests for calcium, vitamin D, and hormone levels are common.",
    },
    {
      id: "5",
      question: "Can lifestyle changes help alongside medical treatment?",
      answer:
        "Yes. Exercise, a nutrient-rich diet, avoiding smoking, and limiting alcohol all support stronger bones.",
    },
  ],
  cholesterol: [
    {
      id: "1",
      question: "What causes high cholesterol?",
      answer:
        "It may result from diet, genetics, lack of exercise, obesity, or hormonal imbalances.",
    },
    {
      id: "2",
      question: "Can high cholesterol be managed without medication?",
      answer:
        "Mild cases can improve with diet, exercise, and lifestyle changes, but some patients need medication.",
    },
    {
      id: "3",
      question: "Why should an endocrinologist treat cholesterol problems?",
      answer:
        "Because cholesterol disorders are often linked to metabolic and hormonal conditions such as diabetes or thyroid disease.",
    },
    {
      id: "4",
      question: " What tests are done for high cholesterol?",
      answer:
        "A lipid profile measures total cholesterol, LDL, HDL, and triglycerides.",
    },
    {
      id: "5",
      question: "Can high cholesterol be completely cured?",
      answer:
        "It can often be controlled and lowered, but long-term management is usually needed to maintain healthy levels.",
    },
  ],
  gestational: [
    {
      id: "1",
      question: "How is gestational diabetes diagnosed?",
      answer:
        "It is diagnosed through blood glucose screening tests, typically between 24 and 28 weeks of pregnancy.",
    },
    {
      id: "2",
      question: "Can gestational diabetes harm the baby?",
      answer:
        "If uncontrolled, it can increase risks of high birth weight, premature birth, and respiratory problems.",
    },
    {
      id: "3",
      question: "Can I still have a normal delivery with gestational diabetes?",
      answer:
        "Yes, with good blood sugar control, many women have normal vaginal deliveries.",
    },
    {
      id: "4",
      question: "Are there specific foods to avoid with gestational diabetes?",
      answer:
        "Limiting sugary and high-carb foods helps maintain stable blood sugar levels.",
    },
    {
      id: "5",
      question: "How often should I check my blood sugar during pregnancy?",
      answer:
        "Your doctor will advise, but often multiple times daily to ensure good control.",
    },
  ],
  pcos: [
    {
      id: "1",
      question: "Can PCOS/PCOD cause infertility?",
      answer:
        "Yes. It can make ovulation irregular, but with treatment and lifestyle changes, many women conceive naturally or with medical assistance.",
    },
    {
      id: "2",
      question: "Can PCOS/PCOD be cured permanently?",
      answer:
        "No, there is no permanent cure. However, symptoms can be managed effectively through lifestyle changes, medication, and regular monitoring.",
    },
    {
      id: "3",
      question: "What foods should be avoided in PCOS/PCOD?",
      answer:
        "Sugary foods, processed carbohydrates, fried items, and junk food can worsen symptoms and should be limited.",
    },
    {
      id: "4",
      question: "Does weight loss help with PCOS/PCOD?",
      answer:
        "Yes. Even a 5–10% reduction in weight can help regulate periods, balance hormones, and improve fertility.",
    },
    {
      id: "5",
      question: "Can PCOS/PCOD be treated without medication?",
      answer:
        "Mild cases may improve with lifestyle changes such as diet, exercise, and stress management, though some women require medication for effective control.",
    },
  ],
};
