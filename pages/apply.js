import Navigation from '../components/navigation.js'
import { motion } from 'framer-motion'
import Footer from '../components/footer.js'

export default function Apply() {
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
                <div className="flex flex-col px-8 mb-3" id="Apply">
                    <h1 className="flex my-12 justify-center text-5xl">Apply</h1>

                </div>
            </div>
            </motion.div>
            <Footer/>
        </>


    )
}