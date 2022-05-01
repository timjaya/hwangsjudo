import { Link } from 'react-scroll'
import styles from './css/Navigation.module.css'

export default function Navigation() {
    return (
        <div className="flex justify-center lg:justify-left">
            <nav className={styles.nav}>
                <ul className="flex text-base md:text-xl nav justify-around my-7 mx-5">
                    <li className="mx-7"><Link href="" to="about" spy={true} offset={-50} smooth={true}>About</Link></li>
                    <li className="mx-7"><Link href="" to="instructor" spy={true} smooth={true}>Instructor</Link></li>
                </ul>
            </nav>
        </div>
    )
}
