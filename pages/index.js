import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import Navigation from '../components/navigation.js'
import Footer from '../components/footer.js'

import styles from '../components/css/Landing.module.css'


export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/apply')
  }

  // title 
  return (
    <> 
      <Head>
        <title>Hwang's Judo | Traditional Judo Dojo | Eugene, Oregon </title>
        <meta name="description" content="Hwang's Judo is a traditional judo dojo that operates in Eugene, OR. We focus on fostering non-competitive physical exercise and proper technique."/>
      </Head>
      <Navigation />

      <div className="flex justify-center py-8 md:py-24">
        <div className="flex flex-col lg:flex-row">
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 1,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .2
              }
            }
          }}>
            <div className="flex justify-center">
              <Image
                src="/images/judo-flip.png"
                alt="Picture of a judo flip"
                // layout="responsive"
                width={600}
                height={600}
              />
            </div>
          </motion.div>
          <div className="flex flex-col justify-center">
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .4
                }
              }
            }}>
              <h1 className="flex justify-center text-center text-4xl font-bold my-4">Hwang's Judo</h1>
              <h2 className="flex justify-center text-neutral-500 text-3xl">황 유도</h2>
              <div className="flex justify-center my-5 text-sm">
                <button onClick={handleClick} className={styles.button}>Apply {'>'}</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  )
}
