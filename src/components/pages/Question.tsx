"use client";

import Button from "@/components/ui/Button/Button";
import styles from "./Question.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { Question } from "@/data/data";
import { useState } from "react";
import Link from "next/link";
import ButtonLink from "../ui/ButtonLink/ButtonLink";

const QuestionPage = ({ question }: { question: Question }) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const showAnswer = () => {
    setIsAnswerShown(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className={styles["page"]}
    >
      <div className="container">
        <div className={styles["page__content"]}>
          <header
            className={classNames(styles["page__header"], styles["header"])}
          >
            <div className={styles["header__data"]}>
              <div className={styles["header__category"]}>
                <span>{question.categoryName}</span>
              </div>
              <div className={styles["header__score"]}>
                <span>{question.value}</span>
              </div>
            </div>
            <div className={styles["header__title"]}>
              <h1>{isAnswerShown ? "Ответ" : "Вопрос"}</h1>
            </div>
          </header>
          <div
            className={classNames(styles["page__question"], styles["question"])}
          >
            <div className={styles["question__question"]}>
              {question.question}
            </div>
            <div className={styles["question__row"]}>
              {!isAnswerShown && question.config.questionImage && (
                <div className={styles["question__image"]}>
                  <Image src={question.config.questionImage} alt="question" />
                </div>
              )}
              {isAnswerShown && question.config.answerImage && (
                <div className={styles["question__image"]}>
                  <Image src={question.config.answerImage} alt="question" />
                </div>
              )}
              <div
                className={classNames(
                  styles["question__answer"],
                  styles["answer"],
                  {
                    [styles["show"]]: isAnswerShown,
                  }
                )}
              >
                {question.answer}
              </div>
            </div>
          </div>
          <div className={styles["page__button-next"]}>
            {!isAnswerShown ? (
              <Button
                onClick={showAnswer}
                variant="outlined-20-gradient"
                text="К ответу"
              />
            ) : (
              <ButtonLink href="/menu" text="К категориям" />
            )}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default QuestionPage;
