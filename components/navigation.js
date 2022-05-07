import { slide as Menu } from 'react-burger-menu'
export default function Navigation() {
    return (
        <Menu>
            <a id="home" className="menu-item py-5" href="/">Home</a>
            <a id="about" className="menu-item py-5" href="/about">About</a>
            <a id="apply" className="menu-item py-5" href="/apply">Apply</a>
            <a id="payment" className="menu-item py-5" href="/payment">Payment</a>
        </Menu>
    )
}
