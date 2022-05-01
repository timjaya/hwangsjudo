import Image from 'next/image'
import Section from './section.js'
import styles from './css/Landing.module.css'

export default function Landing() {
    return (
        <Section>
            <div className="flex justify-center">
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
                        <h1 className="flex justify-center text-4xl">HWANG{"'"}S JUDO</h1>
                        <h1 className="flex justify-center text-2xl">황의 유도</h1>
                        <div className="flex justify-center my-5">
                            <button className={styles.button}>Sign Up {'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
