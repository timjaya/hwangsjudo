import Navigation from '../components/navigation.js'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Footer from '../components/footer.js'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Hwang's Judo is a traditional judo dojo that operates in Eugene, OR. We focus on fostering non-competitive physical exercise and proper technique."/>
            </Head>

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
                <div className="sm:py-8">
                    <div className="flex flex-col px-8 mb-3" id="about">

                        <h1 className="flex my-12 justify-center text-5xl">About</h1>

                        <div className="text-justify text-md md:mx-24 lg:mx-80">
                            <p>
                                In response to Lane County judo players who are looking for a judo experience with
                                that distinctive traditional essence and quality, formal plans are underway to get
                                together again once restrictions allow.<br /><br />
                                Hwang{"'"}s Judo is a neo-traditional dojang focused on creating a warm, collegial
                                others-centered community, with an emphasis on non-competitive physical exercise,
                                mental discipline, well-being, and proper technique.<br /><br />
                                If the forgoing does not align with your martial arts philosophy, desired approach,
                                or natural orientation there are likely other options in the area that will better
                                suit your needs, and we sincerely encourage you to explore those alternatives.
                                For those kindred spirits in the community (many of whom are fellow legacy students
                                of Master Kyu Hwang and Hwang{"'"}s Martial Arts Academy) please receive our kindest
                                greetings. If you{"'"}re interested in joining us on the mat, provide your contact
                                information below and we{"'"}ll be in touch once classes resume.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col px-8" id="instructor">
                        <div className="flex justify-center">
                            <h1 className="my-16  text-5xl">Instructor</h1>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/images/instructor.jpeg"
                                alt="Picture of a judo flip"
                                // layout="responsive"
                                width={426}
                                height={600}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center my-5">
                                <h2 className="text-xl font-extrabold py-5">
                                    Sabonim Jinoo Hwang
                                </h2>
                                <p>
                                    34 Years Experience
                                </p>
                                <p>
                                    4th Dan • Korean Judo Association
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </motion.div>
            <Footer/>
        </>
    )
}