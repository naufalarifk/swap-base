import { Link } from "react-router-dom"
import { ConnectButton } from '@rainbow-me/rainbowkit';
export const Navbar = () => {
    return (
        <ul className="flex flex-row gap-1 cursor-pointer">
            <li>
                <Link to='/'>Main</Link></li>
            <li><Link to='/price'>Price</Link></li>
            <li><Link to='etc'>ETC</Link></li>
            <li><ConnectButton /></li>
        </ul>
    )
}