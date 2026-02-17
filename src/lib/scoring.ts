import type { Answer, ResultTypeId } from "@/types/quiz";
import { resultTypes } from "@/data/resultTypes";

export function calculateResult(answers: Answer[]): ResultTypeId {
  const possibleCount = answers.filter((a) => a === "possible").length;
  const ratio = possibleCount / answers.length;

  for (const rt of resultTypes) {
    const [min, max] = rt.scoreRange;
    if (ratio >= min && ratio < max) {
      return rt.id;
    }
  }

  return "caseby";
}
