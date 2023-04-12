import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className='header_section'>
            <h1>Super Carlist</h1>
            <Link to='/'>Home</Link>
        </section>
    );
}

export default Header;