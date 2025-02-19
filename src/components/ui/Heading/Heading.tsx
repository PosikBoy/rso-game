import React, { ReactNode } from "react";

import styles from "./Heading.module.scss";
import classNames from "classnames";

type HeadingProps = {
  heading: string;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ heading, className = "" }) => {
  return <h1 className={classNames(styles.heading, className)}>{heading}</h1>;
};

export default Heading;
