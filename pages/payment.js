import Navigation from '../components/navigation.js'
import { motion } from 'framer-motion'

export default function Payment() {
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
            <div className="sm:py-8">
                <div className="flex flex-col px-8 mb-3" id="Payment">
                    <h1 className="flex my-12 justify-center text-5xl">Payment</h1>

                </div>
            </div>
            </motion.div>
        </>
    )
}