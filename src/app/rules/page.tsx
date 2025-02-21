import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import Heading from "@/components/ui/Heading/Heading";
import classNames from "classnames";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";

export default function Home() {
  return (
    <div className={styles["page"]}>
      <div className="container">
        <div className={styles["page__content"]}>
          <Heading heading="Правила" />
          <ul className={classNames(styles["page__rules"], styles["rules"])}>
            <li className={styles["rules__item"]}>
              <span>
                Команды по очереди выбирают категорию и количество баллов за
                вопрос.
              </span>
            </li>
            <li className={styles["rules__item"]}>
              <span>Время на обсуждение ответа ограничено 60 секундами.</span>
            </li>
            <li className={styles["rules__item"]}>
              <span>
                За правильный ответ команда получает выбранное количество
                баллов. В случае неверного ответа, возможность ответить
                переходит другой команде.
              </span>
            </li>
            <li className={styles["rules__item"]}>
              <span>
                За правильный ответ на бонусные вопросы команды получают 700
                баллов.
              </span>
            </li>
            <li className={styles["rules__item"]}>
              <span>Побеждает команда, набравшая больше всех очков. 🏆 </span>
            </li>
          </ul>
          <ButtonLink href="/menu" text="Начать игру" />
        </div>
      </div>
    </div>
  );
}
