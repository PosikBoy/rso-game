import question1 from "@/assets/question-1.jpg";
import { StaticImageData } from "next/image";

interface Question {
  id: number;
  value: number;
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
    question: "Какая основная обязанность вожатого в лагере?",
    categoryName: "Вожатство",
    answer: "Обеспечить безопасность детей и организовать их досуг",
    isAnswered: false,
    config: {
      questionImage: question1,
      answerImage: question1,
      time: 5,
    },
  },
  {
    id: 2,
    value: 200,
    question: "Что должен делать вожатый, чтобы поддерживать дисциплину?",
    categoryName: "Вожатство",
    answer: "Устанавливать четкие правила и следить за их соблюдением",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 10,
    },
  },
  {
    id: 3,
    value: 300,
    question:
      "Какой подход лучше всего помогает вожатому наладить контакт с детьми?",
    categoryName: "Вожатство",
    answer: "Быть терпеливым и показывать личный пример",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 15,
    },
  },
  {
    id: 4,
    value: 400,
    question: "Как вожатый может эффективно управлять конфликтами в отряде?",
    categoryName: "Вожатство",
    answer: "Проводить индивидуальные беседы и поддерживать честность",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 20,
    },
  },
  {
    id: 5,
    value: 500,
    question: "Что помогает вожатому развить лидерские качества среди детей?",
    categoryName: "Вожатство",
    answer: "Давать детям ответственность и поощрять инициативу",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 25,
    },
  },

  // Категория: Лагерь
  {
    id: 6,
    value: 100,
    question: "Как называется место для ночных посиделок и костров в лагере?",
    categoryName: "Лагерь",
    answer: "Костровая площадка",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 5,
    },
  },
  {
    id: 7,
    value: 200,
    question: "Какие мероприятия помогают улучшить атмосферу в лагере?",
    categoryName: "Лагерь",
    answer: "Киновечера, конкурсы, спортивные соревнования",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 10,
    },
  },
  {
    id: 8,
    value: 300,
    question: "Как организуются ночные мероприятия в лагере?",
    categoryName: "Лагерь",
    answer:
      "Устроить костер с песнями и играми или ночные приключенческие квесты",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 15,
    },
  },
  {
    id: 9,
    value: 400,
    question: "Что делают дети на утренней зарядке в лагере?",
    categoryName: "Лагерь",
    answer:
      "Выполняют простые физические упражнения, чтобы зарядиться энергией на день",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 20,
    },
  },
  {
    id: 10,
    value: 500,
    question:
      "Какие традиционные мероприятия проводятся в конце лагерной смены?",
    categoryName: "Лагерь",
    answer: "Прощальный вечер, вручение грамот и подарков",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 25,
    },
  },

  // Категория: Песни
  {
    id: 11,
    value: 100,
    question:
      "Как называется популярная песня, которую часто поют на лагерных кострах?",
    categoryName: "Песни",
    answer: "Калинка",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 5,
    },
  },
  {
    id: 12,
    value: 200,
    question: "Какая песня является гимном лагеря?",
    categoryName: "Песни",
    answer: "Лагерный марш",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 10,
    },
  },
  {
    id: 13,
    value: 300,
    question: "Какая песня является символом дружбы и сплоченности в лагере?",
    categoryName: "Песни",
    answer: "Мы вместе",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 15,
    },
  },
  {
    id: 14,
    value: 400,
    question: "Какие песни можно петь на спортивных мероприятиях в лагере?",
    categoryName: "Песни",
    answer: "Песни о победе и командном духе",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 20,
    },
  },
  {
    id: 15,
    value: 500,
    question: "Какие песни чаще всего выбирают дети для лагерных концертов?",
    categoryName: "Песни",
    answer: "Популярные и простые для запоминания песни",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 25,
    },
  },

  // Категория: Отряды
  {
    id: 16,
    value: 100,
    question: "Как называется группа детей, которая работает вместе в лагере?",
    categoryName: "Отряды",
    answer: "Отряд",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 5,
    },
  },
  {
    id: 17,
    value: 200,
    question: "Что помогает укрепить командный дух в отряде?",
    categoryName: "Отряды",
    answer: "Совместные мероприятия и взаимная поддержка",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 10,
    },
  },
  {
    id: 18,
    value: 300,
    question:
      "Какой отряд имеет наибольшие шансы на победу в лагерных конкурсах?",
    categoryName: "Отряды",
    answer: "Тот, кто действует слаженно и проявляет командный дух",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 15,
    },
  },
  {
    id: 19,
    value: 400,
    question: "Какие факторы влияют на успех отряда в лагере?",
    categoryName: "Отряды",
    answer: "Лидерские качества вожатого, поддержка и активное участие детей",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 20,
    },
  },
  {
    id: 20,
    value: 500,
    question:
      "Как вожатый может сделать так, чтобы отряд работал как единая команда?",
    categoryName: "Отряды",
    answer:
      "Организовать групповые задания, развивать лидерские качества детей",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 25,
    },
  },

  // Категория: Дети
  {
    id: 21,
    value: 100,
    question: "Что дети должны делать перед ужином в лагере?",
    categoryName: "Дети",
    answer: "Помыть руки и собраться в столовой",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 5,
    },
  },
  {
    id: 22,
    value: 200,
    question: "Как дети могут участвовать в выборе мероприятий для отряда?",
    categoryName: "Дети",
    answer: "Предлагать идеи на утренних совещаниях или на собрании отряда",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 10,
    },
  },
  {
    id: 23,
    value: 300,
    question:
      "Какие мероприятия развивают творческие способности детей в лагере?",
    categoryName: "Дети",
    answer: "Творческие мастер-классы, конкурсы, концерты",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 15,
    },
  },
  {
    id: 24,
    value: 400,
    question: "Что важно при организации досуга детей в лагере?",
    categoryName: "Дети",
    answer:
      "Сбалансировать активные и спокойные игры, чтобы не перегрузить детей",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 20,
    },
  },
  {
    id: 25,
    value: 500,
    question: "Как дети могут научиться работать в команде в лагере?",
    categoryName: "Дети",
    answer:
      "Участвуя в командных играх, развивая коммуникацию и сотрудничество",
    isAnswered: false,
    config: {
      questionImage: null,
      answerImage: null,
      time: 25,
    },
  },
];

export default data;

export type DataType = Question[];
