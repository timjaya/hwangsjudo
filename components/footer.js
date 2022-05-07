import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './css/Footer.module.css'

export default function Footer() {
    return (
        <>
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

                <div className="flex flex-col justify-center mb-12 mt-24 sm:mt-0 text-sm sm:text-base">
                    <div className="flex py-5 justify-center">
                        <div className="w-4/5">
                            <hr />
                        </div>
                    </div>
                    <div className="flex justify-center py-2">
                        Community ✺ Detail ✺ Traditional
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center">
                        <div className="flex justify-center my-2">Address | Phone Number | By Appointment Only</div>
                    </div>
                </div>

            </motion.div>

        </>
    )
}