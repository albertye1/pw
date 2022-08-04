import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>albert ye</title>
        <meta name="description" content="hi im albert" />
        <link rel="icon" href="/icon2.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
          Hi, I&apos;m Albert.
        </h1>
        
        <img src="/albert.jpg" className="rounded-full border-4 border-green translate-y-7" alt="me"></img>

        <p className={styles.description}>
          Math/CS @ UC Berkeley. Pretty good at data structures and algorithms.
        </p>

        <div className={styles.grid2}>
          <Link href="/projects">
            <a className={styles.card}><h2>Projects 🛠</h2></a>
          </Link>

          <Link href="../res.pdf">
            <a className={styles.card3}><h2>Resume 📃</h2></a>
          </Link>

          <Link
            href="/courses"
          >
            <a className={styles.card2}><h2>Coursework 📝</h2></a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
