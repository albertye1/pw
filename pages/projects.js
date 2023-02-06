import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>projects</title>
        <meta name="description" content="projects ive done" />
        <link rel="icon" href="/~aly/icon2.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange to-yellow">
          Projects
        </h1>

        <p className={styles.description}>
          Here are some projects I&apos;ve worked on in the past.
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/xyzyzl/hard-cp" className={styles.card}>
            <h2>Competitive Programming &rarr;</h2>
            <p>
              Competitive programming problems I&apos;ve done over the years.
            </p>
          </a>

          <a href="https://learn.theyei.org" className={styles.card}>
            <h2>YEI Learning Portal &rarr;</h2>
            <p>A website containing educational presentations and practice problems for various econ topics.</p>
          </a>

          <a
            href="https://github.com/xyzyzl/dotfiles"
            className={styles.card}
          >
            <h2>Linux Tinkering &rarr;</h2>
            <p>I&apos;ve worked a lot with Linux configuration in the past, and the dotfiles I frequently used are here.</p>
          </a>

          <a
            href="https://github.com/xyzyzl/shordle"
            className={styles.card}
          >
            <h2>Shordle &rarr;</h2>
            <p>
              Recreated Wordle in bash as part of a demonstration for my high school CS club.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="/"
        >
	    Return to Homepage
        </Link>
      </footer>
    </div>
  )
}

/*
Page.getLayout = function getLayout(page) {
  return(
    <>
      <Navbar />
      <main>{page}</main>
    </>
  )
}
*/ // imma figure this shit out later
