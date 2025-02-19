"use client";

import Button from "@/components/ui/Button/Button";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/Heading/Heading";
import { resetToDefault } from "@/store/questions/questions.slice";
import { useTypedDispatch } from "@/hooks/redux.hooks";
import data from "@/data/data";
import final from "@/assets/final.png";
import Image from "next/image";
export default function Home() {
  const router = useRouter();

  const dispatch = useTypedDispatch();
  const buttonHandler = () => {
    router.push("/");
    dispatch(resetToDefault(data));
  };

  return (
    <div className={styles["page"]}>
      <div className="container">
        <div className={styles["page__content"]}>
          <Heading heading="Спасибо за игру" />
          <div className={styles["page__image"]}>
            <Image src={final} alt="Логотип МосРСО" />
          </div>
          <div className={styles["page__button-next"]}>
            <Button
              onClick={buttonHandler}
              variant="outlined-20-gradient"
              text="Сбросить игру"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
