"use client";

import { usePathname } from "next/navigation";
import { letTalkQuestionsMap } from "../constants/LetTalkQuestions";
import LetTalkQuestions from "../layout/LetTalkQuestions";

export default function LetTalkQuestionsWrapper() {
  const pathname = usePathname();

  // "/" , "/diabetes", "/pcos"
  const slug = pathname === "/" ? "/" : pathname.split("/")[1];

  const items = letTalkQuestionsMap[slug] || letTalkQuestionsMap["/"];

  return <LetTalkQuestions title="Let’s Talk Any Questions" items={items} />;
}
