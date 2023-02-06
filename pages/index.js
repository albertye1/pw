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
        <link rel="icon" href="/~aly/icon2.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
          Hi, I&apos;m Albert.
        </h1>
        
        <img src="/~aly/albert.jpg" className="rounded-full border-4 border-green translate-y-7" alt="me"></img>

        <p className={styles.description}>
          Math + CS @ UC Berkeley. Pretty good at data structures and algorithms.
        </p>

        <div className={styles.grid2}>
          <Link href="/projects">
            <a className={styles.card}><h2>Projects 🛠</h2></a>
          </Link>

          <Link href="/res.pdf">
            <a className={styles.card3}
	  			target="_blank"
	  			rel="noopener noreferrer"><h2>Resume 📃</h2></a>
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
          href="https://ocf.berkeley.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted by the Open Computing Facility
        </a>
      </footer>
    </div>
  )
}
