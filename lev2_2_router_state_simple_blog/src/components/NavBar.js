import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav_nav'>
            <h1>My Life</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;