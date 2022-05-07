import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import styles from './css/Navigation.module.css'

export default function Navigation() {
    return (
        <>
            <div className="sm:invisible">
                <Menu>
                    <a id="home" className="menu-item py-5" href="/">Home</a>
                    <a id="about" className="menu-item py-5" href="/about">About</a>
                    <a id="apply" className="menu-item py-5" href="/apply">Apply</a>
                    <a id="payment" className="menu-item py-5" href="/payment">Payment</a>
                </Menu>
            </div>
            <div className="invisible sm:visible sm:mt-8 sm:mx-12">
                <div className={styles.desktopmenu}>
                    <Link href="/"><a className="mx-5">Home</a></Link>
                    <Link href="/about"><a className="mx-5">About</a></Link>
                    <Link href="/apply"><a className="mx-5">Apply</a></Link>
                    <Link href="/payment"><a className="mx-5">Payment</a></Link>
                </div>
            </div>
        </>


    )
}
