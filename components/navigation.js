import { Link } from 'react-scroll'
import styles from './css/Navigation.module.css'

export default function Navigation() {
    return (
        <div className="flex justify-left">
            <nav className={styles.nav}>
                <ul className="text-xl flex nav justify-around my-7 mx-5 space-x-1">
                    <li className="mx-7"><Link href="" to="about" spy={true} smooth={true}>About</Link></li>
                    <li className="mx-7"><Link href="" to="instructor" spy={true} smooth={true}>Instructor</Link></li>
                </ul>
            </nav>
        </div>
    )
}
