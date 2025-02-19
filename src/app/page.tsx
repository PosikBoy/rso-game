import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";
import styles from "./page.module.scss";
import Heading from "@/components/ui/Heading/Heading";

export default function Home() {
  return (
    <div className={styles["page"]}>
      <div className="container">
        <div className={styles["page__content"]}>
          <div className={styles["page__name"]}>
            <Heading heading="Интеллектуальная игра" />
            <p>«По волнам с отрядами!»</p>
          </div>
          <ButtonLink href="/rules" text="Начать игру" />
        </div>
      </div>
    </div>
  );
}
