export interface Question {
  id: number;
  situation: string;
  emoji: string;
  category: QuestionCategory;
}

export type QuestionCategory =
  | "physical"
  | "emotional"
  | "social"
  | "digital"
  | "private";

export type Answer = "possible" | "impossible";

export type ResultTypeId =
  | "concrete"
  | "readmaster"
  | "caseby"
  | "swiss"
  | "vitamin"
  | "breaker";

export interface ResultType {
  id: ResultTypeId;
  name: string;
  subtitle: string;
  description: string;
  traits: string[];
  examples: string[];
  commentCoupled: string;
  commentSolo: string;
  shareLine: string;
  scoreRange: [number, number];
  themeColor: string;
  bgGradient: string;
  emoji: string;
}
