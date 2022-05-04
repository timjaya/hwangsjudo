import { Link } from 'react-scroll'
import { slide as Menu } from 'react-burger-menu'
// import './button.css'
export default function Navigation() {

    return (
        // <p>Hello</p>
        // <Menu>
        //     <a id="home" className="menu-item" href="/">Home</a>
        //     <a id="about" className="menu-item" href="/about">About</a>
        // </Menu>

        <div class="header">
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                
                    <li><a href="#work" className="sm:hover:underline">About</a></li>
                    <li><a href="#about" className="sm:hover:underline">Apply</a></li>
                    <li><a href="#careers" className="sm:hover:underline">Payment</a></li>

            </ul>
        </div>



        // <div className="flex justify-center lg:justify-left">
        //     <nav className={styles.nav}>
        //         <ul className="flex text-base md:text-xl nav justify-around my-7 mx-5">
        //             <li className="mx-7"><Link href="" to="about" spy={true} offset={-50} smooth={true}>About</Link></li>
        //             <li className="mx-7"><Link href="" to="instructor" spy={true} smooth={true}>Instructor</Link></li>
        //         </ul>
        //     </nav>
        // </div>
    )
}
