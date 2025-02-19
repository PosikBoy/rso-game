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
              <span>
                Время на обсуждение и запись ответа ограничено 60 секундами.
              </span>
            </li>
            <li className={styles["rules__item"]}>
              <span>
                Команда, выбравшая категорию, записывает свой ответ на листочке.
                Если ответ правильный, она получает х2 очки.
              </span>
            </li>
            <li className={styles["rules__item"]}>
              <span>
                Остальные команды также записывают свои ответы на листочках. За
                правильный ответ они получают обычные очки
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
