"use client";

import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/Heading/Heading";
import Image from "next/image";
import logoStroke from "@/assets/logo-stroke.png";
import classNames from "classnames";
export default function Home() {
  const router = useRouter();
  const buttonHandler = () => {
    router.push("/rules");
  };

  return (
    <div className={styles["page"]}>
      <div className="container">
        <div className={styles["page__content"]}>
          <div className={styles["page__name"]}>
            <Heading heading="Интеллектуальная игра" />
            <p>«По волнам с отрядами!»</p>
          </div>
          <Button
            onClick={buttonHandler}
            variant="outlined-20-gradient"
            text="Начать игру"
          />
        </div>
      </div>
    </div>
  );
}
