
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar.jsx'

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>courses</title>
        <meta name="description" content="courses ive taken" />
        <link rel="icon" href="/icon2.ico" />
      </Head>

      <main className={styles.main2}>
        <center><h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple to-pink">
			Courses
        </h1></center>
		<h2 className="text-3xl font-bold underline">
			Fall 2022
		</h2>
		<ul className="list-disc">
			<li><b className="text-purple">Math H54:</b> Honors Linear Algebra and Differential Equations</li>
			<li><b className="text-purple">CS 61A:</b> Structure and Interpretation of Computer Programs</li>
			<li><b className="text-purple">CS 61B:</b> Data Structures</li>
			<li><b className="text-purple">HIST 3:</b> Islamic and Eastern Roman History</li>
		</ul>
		

		<h2 className="text-3xl font-bold underline">
			2021-2022
		</h2>
		<ul class="list-disc">
			<li><b className="text-purple">Math 004A:</b> Intermediate Calculus</li>
			<li><b className="text-purple">Math 004C:</b> Linear Algebra</li>
		</ul>
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