import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio site!</h1>
      <h3>
        <Link href="/gallery">
          <a>Click here </a>
        </Link>
          to view gallery.
      </h3>
    </div>
  )
}
