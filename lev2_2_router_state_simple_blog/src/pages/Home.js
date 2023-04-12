
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home_section'>
            <h1>Welcome to my</h1>
            <h1>simple Blog</h1>
            <Link to='/blog'>Go to article</Link>
        </section>
    );
}

export default Home;