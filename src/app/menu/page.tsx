"use client";

import Button from "@/components/ui/Button/Button";
import "./page.scss";
import { useRouter } from "next/navigation";
import { useTypedDispatch, useTypedSelector } from "@/hooks/redux.hooks";
import { markQuestionAnswered } from "@/store/questions/questions.slice";
import classNames from "classnames";
import { motion } from "framer-motion";
import Heading from "@/components/ui/Heading/Heading";

export default function Menu() {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const data = useTypedSelector((state) => state.questionsSlice.data);

  const buttonRulesHandler = () => {
    router.push("/rules");
  };

  const buttonFinishHandler = () => {
    router.push("/results");
  };

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
                <button
                  key={item.id}
                  className={classNames(
                    "questions__item",
                    item.isAnswered ? "hidden" : ""
                  )}
                  onClick={() => {
                    router.push(`/question/${item.id}`);
                    dispatch(markQuestionAnswered(item.id));
                  }}
                >
                  <span>{item.value}</span>
                </button>
              ))}
            </ul>
          </div>
          <div className="page__navigation">
            <div className="page__button-rules">
              <Button
                onClick={buttonRulesHandler}
                variant="outlined-20-gradient"
                text="Вернуться к правилам"
              />
            </div>
            <div className="page__button-rules">
              <Button
                onClick={buttonFinishHandler}
                variant="outlined-20-gradient"
                text="Завершить игру"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
