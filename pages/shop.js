import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Home() {
  return (
    <div>
      <HeaderNavigation />

      <div className={styles.body}>
        <h3>More content coming soon...</h3>
      </div>
    </div>
  );
}

/**
 * 
        <h3>
          <Link href="./gallery">
            <a>Click here </a>
          </Link>
            to view gallery.
        </h3>
 */
