import type { Question } from "@/types/quiz";

export const questions: Question[] = [
  // --- physical ---
  {
    id: 1,
    situation:
      "회사 워크숍에서 야외 바베큐를 하는데, 내 연인이 추워하는 이성 동료에게 자기 겉옷을 벗어줬다고 한다",
    emoji: "🧥",
    category: "physical",
  },
  {
    id: 2,
    situation:
      "회사 회식 자리에서 내 연인이 이성 동료 머리에 붙은 음식 부스러기를 직접 손으로 떼어줬다고 한다",
    emoji: "😳",
    category: "physical",
  },
  {
    id: 3,
    situation:
      "내 연인이 애사친이 새로 산 향수 냄새를 맡아봤다고 한다. 손목을 가까이 대고 킁킁거렸다는데",
    emoji: "🫧",
    category: "physical",
  },
  {
    id: 4,
    situation:
      "내 연인이 애사친과 카페에 갔는데, 애사친이 자기 빨대째 음료를 건넸고 그걸 그냥 받아 마셨다고 한다",
    emoji: "🥤",
    category: "physical",
  },
  {
    id: 5,
    situation:
      "내 연인이 카페에서 애사친과 핸드폰 영상을 같이 봤는데, 화면이 작아서 어깨가 완전히 닿은 채로 몇 분간 봤다고 한다",
    emoji: "📱",
    category: "physical",
  },
  // --- emotional ---
  {
    id: 6,
    situation:
      "내 연인이 애사친의 자소서를 새벽까지 같이 고쳐줬다고 한다. 꽤 사적인 내용이 담긴 자소서를 둘이서만 봤다는데",
    emoji: "📝",
    category: "emotional",
  },
  {
    id: 7,
    situation:
      "내 연인이 애사친한테서 울면서 전화를 받았다고 한다. 집안 얘기를 나한테는 말 못 하고 애사친한테 먼저 털어놓은 거라는데",
    emoji: "😢",
    category: "emotional",
  },
  {
    id: 8,
    situation:
      "내 연인이 애사친 생일에 직접 고른 선물과 손편지를 줬다고 한다. 꽤 오래 고민해서 골랐다는데",
    emoji: "🎁",
    category: "emotional",
  },
  {
    id: 9,
    situation:
      "내 연인이 회사에서 큰 실수를 했는데, 나한테 말하기 전에 같은 업계인 애사친한테 먼저 연락해서 상담했다고 한다",
    emoji: "💼",
    category: "emotional",
  },
  // --- social ---
  {
    id: 10,
    situation:
      "대학 동기 4명이서 맛집을 예약했는데 당일에 2명이 빠졌다. 노쇼 패널티가 붙어서, 내 연인이 애사친과 둘이서 갔다고 한다",
    emoji: "🍽️",
    category: "social",
  },
  {
    id: 11,
    situation:
      "내 연인이 애사친의 소개팅 옷을 같이 골라주러 쇼핑몰에 갔다고 한다. \"솔직하게 말해줄 사람이 너밖에 없대\"라는데",
    emoji: "🛍️",
    category: "social",
  },
  {
    id: 12,
    situation:
      "내 연인이 좋아하는 뮤지션 페스티벌에 애사친과 둘이 갔다고 한다. 나는 그 장르에 관심이 없고, 애사친이 같은 팬이라서",
    emoji: "🎶",
    category: "social",
  },
  {
    id: 13,
    situation:
      "회식 2차 노래방에서 내 연인이 애사친과 발라드 듀엣곡을 불렀다고 한다. 분위기상 거절하기 어려웠다는데",
    emoji: "🎤",
    category: "social",
  },
  // --- digital ---
  {
    id: 14,
    situation:
      "내 연인이 애사친과 같은 야구팀을 응원해서, 시즌 중에 거의 매일 카톡으로 경기 얘기를 주고받고 있다",
    emoji: "📣",
    category: "digital",
  },
  {
    id: 15,
    situation:
      "새벽 1시에 애사친한테서 내 연인에게 전화가 왔다. 반려동물이 아파서 패닉 상태라 병원 찾아주고 계속 통화하면서 같이 기다려줬다고 한다",
    emoji: "🌙",
    category: "digital",
  },
  {
    id: 16,
    situation:
      "내 연인이 애사친의 인스타 셀카나 일상 사진에 매번 좋아요를 누르고, 스토리도 빠짐없이 답장을 남기고 있다",
    emoji: "💬",
    category: "digital",
  },
  {
    id: 17,
    situation:
      "내 연인이 애사친과 같은 게임에 빠져서, 디스코드로 보이스톡 하면서 같이 랭크를 돌리고 있다고 한다",
    emoji: "🎮",
    category: "digital",
  },
  // --- private ---
  {
    id: 18,
    situation:
      "내 연인이 애사친 자취방에 가구 조립을 도와주러 갔다가, 끝나고 저녁도 같이 시켜먹고 왔다고 한다",
    emoji: "🔧",
    category: "private",
  },
  {
    id: 19,
    situation:
      "내 연인이 면허 딴 애사친의 첫 장거리 드라이브에 조수석으로 같이 타고 근교 바다로 당일치기 다녀왔다고 한다",
    emoji: "🚗",
    category: "private",
  },
  {
    id: 20,
    situation:
      "내 연인이 애사친네 집에서 여럿이 놀다가 둘만 남았는데, 넷플릭스 시리즈가 궁금해서 끝까지 보고 왔다고 한다",
    emoji: "🏠",
    category: "private",
  },
];
