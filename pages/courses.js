import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Page() {
	return (
		<div className={styles.container}>
		<Head>
		<title>Relevant Coursework</title>
		<meta name="description" content="courses ive taken" />
		<link rel="icon" href="/~aly/icon2.ico" />
		</Head>

		<main className={styles.main2}>
		<center><h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple to-pink">
		Courses
		</h1></center>
		<hrule></hrule>
		<h2 className="text-3xl font-bold underline">
		Spring 2023
		</h2>
		<ul className="list-disc">
		<li><b className="text-purple">CS 370:</b> Adaptive Instruction Methods in Computer Science</li>
		<li><b className="text-purple">CS 61C:</b> Great Ideas of Computer Architecture (Machine Structures)</li>
		<li><b className="text-purple">CS 170:</b> Efficient Algorithms and Intracatable Problems</li>
		<li><b className="text-purple">CS 197:</b> Academic Intern for CS 70 (Discrete Mathematics and Probability Theory)</li>
		<li><b className="text-purple">Math 110:</b> Linear Algebra (Upper Division)</li>
		</ul>

		<h2 className="text-3xl font-bold underline">
		Fall 2022
		</h2>
		<ul className="list-disc">
		<li><b className="text-purple">CS 70:</b> Discrete Mathematics and Probability Theory 
		<i className="text-purple">(A+)</i></li>
		<li><b className="text-purple">CS 61A:</b> Structure and Interpretation of Computer Programs
		<i className="text-purple">(A)</i></li>
		<li><b className="text-purple">CS 61B:</b> Data Structures
		<i className="text-purple">(A+)</i></li>
		</ul>

		<h2 className="text-3xl font-bold underline">
		2021-2022 (Concurrent Enrollment)
		</h2>
		<ul className="list-disc">
		<li><b className="text-purple">Math 004A:</b> Intermediate Calculus
		<i className="text-purple">(A)</i></li>
		<li><b className="text-purple">Math 004C:</b> Linear Algebra
		<i className="text-purple">(A)</i></li>
		</ul>
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
