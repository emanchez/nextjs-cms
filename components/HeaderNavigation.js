import Link from "next/link";
import styles from "./HeaderNavigation.module.css";

const navLinks = [
  {
    href: "./",
    label: "Home",
  },
  {
    href: "./gallery",
    label: "Gallery",
  },
  {
    href: "./shop",
    label: "Shop",
  },
];

export default function HeaderNavigation() {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav}>
        {navLinks.map((link) => {
          return (
            <Link href={link.href} key={link.label}>
              <a>{link.label}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
