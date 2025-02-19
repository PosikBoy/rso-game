import Link from "next/link";
import styles from "./ButtonLink.module.scss";
import { ComponentProps, FC } from "react";

interface IProps extends ComponentProps<typeof Link> {
  href: string;
  text: string;
}

const ButtonLink: FC<IProps> = ({ href, text, ...rest }) => {
  return (
    <Link href={href} className={styles.button} {...rest}>
      <span>{text}</span>
    </Link>
  );
};

export default ButtonLink;
