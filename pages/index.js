import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../components/css/Landing.module.css'
import Navigation from '../components/navigation.js'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/apply')
  }

  return (
    <>
      <Navigation />
      <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: 1,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .1
                    }
                }
            }}>
      <div className="flex justify-center py-28">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center">
            <Image
              src="/images/judo-flip.png"
              alt="Picture of a judo flip"
              // layout="responsive"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="flex justify-center text-4xl font-bold my-4">Hwang Judo</h1>
            <h1 className="flex justify-center text-neutral-500 text-3xl">황 유도</h1>
            <div className="flex justify-center my-5">
              <button onClick={handleClick} className={styles.button}>Apply {'>'}</button>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}
