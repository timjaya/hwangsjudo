import Navigation from '../components/navigation.js'
import { motion } from 'framer-motion'
import Footer from '../components/footer.js'
import Head from 'next/head'
import React, { useRef } from 'react';
import { useAlert } from 'react-alert';


export default function Apply() {

    const alerts = useAlert()
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            martial_arts_background: e.target.martial_arts_background.value,
            good_fit: e.target.good_fit.value,
        }

        const response = await fetch('/api/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        console.log(response.status)
        if (!response.ok) {
            console.log("Error on submitting application!")
            alerts.show("Error on submitting application! Please contact administrator for help (hwangsjudo@gmail.com).", {
                closeCopy: "CLOSE"
            })
        } else {
            console.log(`Success in submitting application for ${e.target.email.value}`)
            alerts.show("Application Submitted!", {
                closeCopy: "CLOSE"
            })
        }
    }
    return (
        <>

            <Head>
                <title>Apply</title>
                <meta name="description" content="Apply for Hwang's Judo today! Be part of a warm and others-centered community." />
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
                    <div className="flex flex-col px-8 mb-3" id="Apply">
                        <h1 className="flex my-12 justify-center text-5xl">Apply</h1>
                        <div className="text-center text-md md:mx-24 lg:mx-40">
                            <p>
                                Please apply below if you’re interested in joining us on the mat.
                                Space is limited and membership is not guaranteed.
                                The admissions committee will review your application and get back to you with an interview.
                            </p>

                        </div>
                        <div className="my-10 flex justify-center">
                            <form onSubmit={handleSubmit} className="w-full max-w-lg" >
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            First Name
                                        </label>
                                        <input id="first-name" name="first_name" type="text" placeholder="Jane" required className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Last Name
                                        </label>
                                        <input id="last-name" name="last_name" type="text" placeholder="Doe" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Email
                                        </label>
                                        <input id="email" type="email" name="email" placeholder="Jane.Doe@gmail.com" required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />

                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Phone
                                        </label>
                                        <input id="phone" type="text" name="phone" placeholder="###-###-####" minLength="12" maxLength="12" required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Martial Arts Background (if any)
                                        </label>
                                        <textarea id="martial-arts-background" type="text" name="martial_arts_background" required rows="7" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Tell us how you could be a good fit.
                                        </label>
                                        <textarea id="good-fit" type="text" name="good_fit" required rows="7" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                    </div>
                                </div>
                                {/* <div className="md:flex md:items-center">
                                    <div className="md:w-2/3"> */}
                                <button type="submit" className="shadow bg-gray-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    Send Application
                                </button>
                                {/* </div>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer />
        </>


    )
}