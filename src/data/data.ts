import { StaticImageData } from "next/image";
import Question1 from "@/assets/question-1.webp";
import Question3 from "@/assets/question-3.webp";

import Question4 from "@/assets/question-4.webp";
import Question5 from "@/assets/question-5.webp";
import Question7 from "@/assets/question-7.webp";
import Question8 from "@/assets/question-8.webp";
import Question9 from "@/assets/question-9.webp";
import Question11 from "@/assets/question-11.webp";
import Question13 from "@/assets/question-13.webp";
import Question14 from "@/assets/question-14.webp";
import Question15 from "@/assets/question-15.webp";
import Question16 from "@/assets/question-16.webp";
import Question17 from "@/assets/question-17.webp";
import Question19 from "@/assets/question-19.webp";
import Question20 from "@/assets/question-20.webp";
import Question21 from "@/assets/question-21.webp";
import Question22 from "@/assets/question-22.webp";
import Question23 from "@/assets/question-23.webp";
import Question25 from "@/assets/question-25.webp";
import Question26 from "@/assets/question-26.webp";
import Question27 from "@/assets/question-27.webp";
import Question28 from "@/assets/question-28.webp";
import Question29 from "@/assets/question-29.webp";

export interface Question {
  id: number;
  value: number | string;
  question: string;
  answer: string;
  categoryName: string;
  isAnswered: boolean;
  config: {
    questionImage: StaticImageData | null;
    answerImage: StaticImageData | null;
    time: number | null;
  };
}

const data: Question[] = [
  // Категория: Вожатство
  {
    id: 1,
    value: 100,
    question:
      "Как называются танцы, которые вожатые танцуют на сцене, а дети повторяют?",
    categoryName: "Вожатство",
    answer: "Эти зажигательные танцы называются сипелками",
    isAnswered: false,
    config: { questionImage: Question1, answerImage: Question1, time: 30 },
  },
  {
    id: 2,
    value: 200,
    question:
      "Если ребёнок спрашивает, сколько лет вожатому, какой возраст нужно назвать?",
    categoryName: "Вожатство",
    answer: "48",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },
  {
    id: 3,
    value: 300,
    question: "Как называется помещение, где живёт вожатый?",
    categoryName: "Вожатство",
    answer: "Вожатская",
    isAnswered: false,
    config: { questionImage: Question3, answerImage: Question3, time: 30 },
  },
  {
    id: 4,
    value: 400,
    question: "Планёрка – это?",
    categoryName: "Вожатство",
    answer:
      "Собрание вожатых педагогического коллектива в лагере где обсуждается прошедший и предстоящий дни",
    isAnswered: false,
    config: { questionImage: Question4, answerImage: Question4, time: 30 },
  },
  {
    id: 5,
    value: 500,
    question: "В каком году появился Вожатский галстук?",
    categoryName: "Вожатство",
    answer: "1922",
    isAnswered: false,
    config: { questionImage: Question5, answerImage: Question5, time: 30 },
  },
  {
    id: 6,
    value: "Бонус",
    question: "Бонусный раунд",
    categoryName: "Вожатство",
    answer: "Даже презентация не знает ответ на этот вопрос...",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },

  // Категория: Дети
  {
    id: 7,
    value: 100,
    question: "Когда отмечают Международный день защиты детей?",
    categoryName: "Дети",
    answer: "1 июня",
    isAnswered: false,
    config: { questionImage: Question7, answerImage: Question7, time: 30 },
  },
  {
    id: 8,
    value: 200,
    question:
      "В комнате 5 углов. В каждом углу стоит стул. На каждом стуле сидит ребёнок. Сколько всего детей в комнате?",
    categoryName: "Дети",
    answer: "5",
    isAnswered: false,
    config: { questionImage: Question8, answerImage: Question8, time: 30 },
  },
  {
    id: 9,
    value: 300,
    question:
      "На какой кружок по статистике больше всего любят ходить дети в лагере?",
    categoryName: "Дети",
    answer: "Спорт/спортивные игры",
    isAnswered: false,
    config: { questionImage: Question9, answerImage: Question9, time: 30 },
  },
  {
    id: 10,
    value: 400,
    question: "Крылатая фраза гласит, что дети – это…",
    categoryName: "Дети",
    answer: "Цветы жизни",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },
  {
    id: 11,
    value: 500,
    question:
      "Считается, что раньше внизу масштабных полотен на религиозную тематику художники дорисовывали собак. Зачем?",
    categoryName: "Дети",
    answer: "Увлечь детей",
    isAnswered: false,
    config: { questionImage: Question11, answerImage: Question11, time: 30 },
  },
  {
    id: 12,
    value: "Бонус",
    question: "Бонусный раунд",
    categoryName: "Дети",
    answer: "Даже презентация не знает ответ на этот вопрос...",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },

  // Категория: Лагерь
  {
    id: 13,
    value: 100,
    question: "Сколько обычно приёмов пищи в лагере?",
    categoryName: "Лагерь",
    answer:
      "Обычно в лагерях 5 приемов пищи. Это завтрак, обед, полдник, ужин и второй ужин.",
    isAnswered: false,
    config: { questionImage: Question13, answerImage: Question13, time: 30 },
  },
  {
    id: 14,
    value: 200,
    question: "До какого возраста дети могут приехать в лагерь?",
    categoryName: "Лагерь",
    answer: "До 17 включительно",
    isAnswered: false,
    config: { questionImage: Question14, answerImage: Question14, time: 30 },
  },
  {
    id: 15,
    value: 300,
    question: "Как называется отрядное место, где висят плакаты и грамоты?",
    categoryName: "Лагерь",
    answer: "Отрядный уголок.",
    isAnswered: false,
    config: { questionImage: Question15, answerImage: Question15, time: 30 },
  },
  {
    id: 16,
    value: 400,
    question: "Как расшифровывается ДОЛ?",
    categoryName: "Лагерь",
    answer: "Детский оздоровительный лагерь",
    isAnswered: false,
    config: { questionImage: Question16, answerImage: Question16, time: 30 },
  },
  {
    id: 17,
    value: 500,
    question: "Как называется первый в России лагерь?",
    categoryName: "Лагерь",
    answer: "Артек",
    isAnswered: false,
    config: { questionImage: Question17, answerImage: Question17, time: 30 },
  },
  {
    id: 18,
    value: "Бонус",
    question: "Бонусный раунд",
    categoryName: "Лагерь",
    answer: "Даже презентация не знает ответ на этот вопрос...",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },

  // Категория: Песни
  {
    id: 19,
    value: 100,
    question:
      "Я с тобой спорить не хочу И доказывать, кто и что ты, Хочешь, я завтра же прилечу? Только где они, …?",
    categoryName: "Песни",
    answer: "Самолёты",
    isAnswered: false,
    config: { questionImage: Question19, answerImage: Question19, time: 30 },
  },
  {
    id: 20,
    value: 200,
    question: "Это всё РСО, команда…",
    categoryName: "Песни",
    answer: "Сильных",
    isAnswered: false,
    config: { questionImage: Question20, answerImage: Question20, time: 30 },
  },
  {
    id: 21,
    value: 300,
    question: "Снова в …, снова с тобой, снова мечты ворвутся в реальность!",
    categoryName: "Песни",
    answer: "Отряд",
    isAnswered: false,
    config: { questionImage: Question21, answerImage: Question21, time: 30 },
  },
  {
    id: 22,
    value: 400,
    question: "Твоя улыбка … красит, Не важно, какого цвета она!",
    categoryName: "Песни",
    answer: "Бойцовку",
    isAnswered: false,
    config: { questionImage: Question22, answerImage: Question22, time: 30 },
  },
  {
    id: 23,
    value: 500,
    question: "Эй, …! В наших душах горит пожар",
    categoryName: "Песни",
    answer: "Брат",
    isAnswered: false,
    config: { questionImage: Question23, answerImage: Question23, time: 30 },
  },
  {
    id: 24,
    value: "Бонус",
    question: "Бонусный раунд",
    categoryName: "Песни",
    answer: "Даже презентация не знает ответ на этот вопрос...",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },

  // Категория: Отряды
  {
    id: 25,
    value: 100,
    question: "Когда празднуется день РСО?",
    categoryName: "Отряды",
    answer: "17 февраля",
    isAnswered: false,
    config: { questionImage: Question25, answerImage: Question25, time: 30 },
  },
  {
    id: 26,
    value: 200,
    question:
      "Сколько лет исполняется движению студенческих отрядов в 2025 году?",
    categoryName: "Отряды",
    answer: "66",
    isAnswered: false,
    config: { questionImage: Question26, answerImage: Question26, time: 30 },
  },
  {
    id: 27,
    value: 300,
    question:
      "Как называется человек в отряде, отвечающий, в первую очередь, за трудоустройство?",
    categoryName: "Отряды",
    answer: "Командир",
    isAnswered: false,
    config: { questionImage: Question27, answerImage: Question27, time: 30 },
  },
  {
    id: 28,
    value: 400,
    question: "Спевка – это?",
    categoryName: "Отряды",
    answer: "Коллективное исполнение песен в орлятском кругу",
    isAnswered: false,
    config: { questionImage: Question28, answerImage: Question28, time: 30 },
  },
  {
    id: 29,
    value: 500,
    question: "Что изображено на шевроне РСО?",
    categoryName: "Отряды",
    answer: "Мастерок, восходящее солнце, книга",
    isAnswered: false,
    config: { questionImage: Question29, answerImage: Question29, time: 30 },
  },
  {
    id: 30,
    value: "Бонус",
    question: "Бонусный раунд",
    categoryName: "Отряды",
    answer: "Даже презентация не знает ответ на этот вопрос...",
    isAnswered: false,
    config: { questionImage: null, answerImage: null, time: 30 },
  },
];

export default data;
export type DataType = Question[];
