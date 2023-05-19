import Image from 'next/image'
import styles from '@/styles/page.module.css'
import Link from 'next/link'

export default function Home({ title = '' }) {
  return (
    <main className={styles.main}>
      <h1>Home component</h1>
    </main>
  )
}
