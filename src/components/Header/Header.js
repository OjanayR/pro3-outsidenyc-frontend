 import { Link } from 'react-router-dom';
 import './Header.css';
 
 export default function Header(props) {
    return (
        <header className="Header">
            <Link to="/">
                <h1>Temp Moodboard</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                        <li><Link to ="" onClick={props.handleLogout}>Logout</Link></li>
                        <li><Link to= "/dashboard">Dashboard</Link></li>
                        </>
                        :
                        <>
                        <li><Link to= "/signup">Sign Up</Link></li>
                        <li><Link to= "/login">Login</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}

