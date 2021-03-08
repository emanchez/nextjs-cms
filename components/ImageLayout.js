import styles from "./imagelayout.module.css";

export default function ImageLayout({ children }) {
  return <div className={styles.image_wrap}>{children}</div>;
}
