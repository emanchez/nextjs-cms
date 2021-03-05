import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import HeaderNavigation from '../components/HeaderNavigation'
import GalleryPreview from '../components/GalleryPreview'


export default function Home() {
  return (
    <div>
      <HeaderNavigation />
      <div className={styles.title}>
        <h1>Welcome to my portfolio site!</h1>
      </div>
      <GalleryPreview />
      <h3>More content coming soon...</h3>
    </div>
  )
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