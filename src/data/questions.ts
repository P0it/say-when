import type { Question } from "@/types/quiz";

export const questions: Question[] = [
  // --- physical ---
  {
    id: 1,
    situation:
      "갑자기 날씨가 추워졌는데 이성 친구가 얇게 입고 왔다. 나만 겉옷이 있어서 빌려준다",
    emoji: "🧥",
    category: "physical",
  },
  {
    id: 2,
    situation:
      "이성 친구 눈 밑에 속눈썹이 붙어있다. 주변에 거울이 없어서 직접 손으로 떼어준다",
    emoji: "😊",
    category: "physical",
  },
  {
    id: 3,
    situation:
      "같이 밥 먹는데 이성 친구가 새우를 좋아한다. 자연스럽게 새우 껍질을 까서 접시에 놔준다",
    emoji: "🦐",
    category: "physical",
  },
  {
    id: 4,
    situation:
      "이성 친구가 자기 음료를 \"이거 맛있다, 한 입만 먹어봐\" 하면서 빨대째 건넨다. 그냥 받아 마신다",
    emoji: "🥤",
    category: "physical",
  },
  {
    id: 5,
    situation:
      "이성 친구가 재밌는 얘기를 해서 빵 터졌다. 웃으면서 자연스럽게 어깨를 툭 치거나 팔을 잡는다",
    emoji: "😂",
    category: "physical",
  },
  // --- emotional ---
  {
    id: 6,
    situation:
      "이성 친구가 머리를 확 바꿨는데 아무도 눈치를 못 챘다. 바로 알아채고 \"잘 어울린다\"고 말해준다",
    emoji: "✨",
    category: "emotional",
  },
  {
    id: 7,
    situation:
      "이성 친구가 연인 문제로 고민 상담을 해온다. 나도 자연스럽게 내 연인 얘기를 꺼내면서 서로 조언을 주고받는다",
    emoji: "🗣️",
    category: "emotional",
  },
  {
    id: 8,
    situation:
      "이성 친구 생일인데 기프티콘만 보내긴 뭔가 아쉽다. 뭘 좋아할까 고민하다가 직접 고른 향수를 선물한다",
    emoji: "🎁",
    category: "emotional",
  },
  {
    id: 9,
    situation:
      "요즘 고민이 있는데 연인한테 말하면 괜히 걱정시킬 것 같다. 이성 친구한테 먼저 털어놓고 조언을 구한다",
    emoji: "🤫",
    category: "emotional",
  },
  // --- social ---
  {
    id: 10,
    situation:
      "원래 여러 명이 약속이었는데 당일에 다 빠졌다. 그래도 둘이서 밥 먹으러 간다",
    emoji: "🍽️",
    category: "social",
  },
  {
    id: 11,
    situation:
      "이성 친구가 \"나 옷 좀 같이 골라줘\" 하고 부탁한다. 둘이 쇼핑몰 가서 서로 옷 입어보고 골라준다",
    emoji: "🛍️",
    category: "social",
  },
  {
    id: 12,
    situation:
      "보고 싶은 멜로 영화가 있는데 연인은 그 장르를 안 좋아한다. 이성 친구도 보고 싶어 해서 둘이 간다",
    emoji: "🎬",
    category: "social",
  },
  {
    id: 13,
    situation:
      "술 한잔 하고 기분이 좋다. 이성 친구와 \"한 곡만 하자\" 며 노래방에 갔는데, 분위기 타서 발라드 듀엣까지 부른다",
    emoji: "🎤",
    category: "social",
  },
  // --- digital ---
  {
    id: 14,
    situation:
      "같은 프로젝트를 하고 있어서 업무 얘기로 시작했는데, 자연스럽게 이성 친구와 거의 매일 카톡을 주고받게 됐다",
    emoji: "📱",
    category: "digital",
  },
  {
    id: 15,
    situation:
      "밤 12시가 넘었는데 이성 친구한테 연락이 왔다. 급한 건 아니고 \"잠이 안 와서\"라길래, 나도 마침 잠이 안 와서 새벽까지 통화한다",
    emoji: "🌙",
    category: "digital",
  },
  // --- private ---
  {
    id: 16,
    situation:
      "주말 아침에 이성 친구가 \"집 근처인데 잠깐 볼래?\" 한다. 세수만 하고 편한 차림으로 나가서 편의점에서 만난다",
    emoji: "🏪",
    category: "private",
  },
  {
    id: 17,
    situation:
      "이성 친구가 독감으로 혼자 누워있다고 한다. 걱정돼서 죽이랑 약 사들고 자취방에 찾아간다",
    emoji: "🤒",
    category: "private",
  },
  {
    id: 18,
    situation:
      "이성 친구가 \"요즘 너무 답답하다, 바람 좀 쐬자\"고 한다. 둘이 근교 바다로 당일치기 드라이브 다녀온다",
    emoji: "🚗",
    category: "private",
  },
  {
    id: 19,
    situation:
      "이성 친구네 집에서 여러 명이 놀다가 하나둘 가고 둘만 남았다. 보던 영화가 아직 안 끝나서 끝까지 보고 간다",
    emoji: "🏠",
    category: "private",
  },
];
