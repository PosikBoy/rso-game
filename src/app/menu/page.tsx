"use client";

import Button from "@/components/ui/Button/Button";
import "./page.scss";
import { useTypedDispatch, useTypedSelector } from "@/hooks/redux.hooks";
import { markQuestionAnswered } from "@/store/questions/questions.slice";
import classNames from "classnames";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading/Heading";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";

export default function Menu() {
  const dispatch = useTypedDispatch();
  const data = useTypedSelector((state) => state.questionsSlice.data);

  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.categoryName))
  );

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="page"
    >
      <div className="container">
        <div className="page__content">
          <Heading heading="Выберите категорию и количество баллов" />

          <div className="page__menu">
            <ul className="page__categories categories">
              {uniqueCategories.map((category) => (
                <li key={category} className="categories__item">
                  <h2>{category}</h2>
                </li>
              ))}
            </ul>
            <ul className="page__questions questions">
              {data.map((item) => (
                <ButtonLink
                  key={item.id}
                  className={classNames(
                    "questions__item",
                    item.isAnswered ? "hidden" : ""
                  )}
                  href={`/question/${item.id}`}
                  onClick={() => {
                    dispatch(markQuestionAnswered(item.id));
                  }}
                  text={item.value.toString()}
                />
              ))}
            </ul>
          </div>
          <div className="page__navigation">
            <div className="page__button-rules">
              <ButtonLink href="/rules" text="Вернуться к правилам" />
            </div>
            <div className="page__button-rules">
              <ButtonLink href="/results" text="Завершить игру" />
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
