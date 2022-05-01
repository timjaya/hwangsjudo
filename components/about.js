import { Element } from 'react-scroll'
import Section from './section.js'
export default function About() {
    return (
        <Section>
            <div className="mb-36">
            <div className="flex flex-col px-6" id="about">
                <h1 className="flex my-12 justify-center text-5xl">About</h1>
                <div className="text-center">
                    <p>
                        In response to Lane County judo players who are looking for a judo experience with that distinctive traditional essence and quality, formal plans are underway to get together again once restrictions allow.
                        Hwang{"'"}s Judo is a neo-traditional dojang focused on creating a warm, collegial others-centered community, with an emphasis on non-competitive physical exercise, mental discipline, well-being, and proper technique.
                        If the forgoing does not align with your martial arts philosophy, desired approach, or natural orientation there are likely other options in the area that will better suit your needs, and we sincerely encourage you to explore those alternatives.
                        For those kindred spirits in the community (many of whom are fellow legacy students of Master Kyu Hwang and Hwang{"'"}s Martial Arts Academy) please receive our kindest greetings. If you{"'"}re interested in joining us on the mat, provide your contact information below and we{"'"}ll be in touch once classes resume.
                    </p>
                </div>
            </div>
            </div>
        </Section>
    )
}