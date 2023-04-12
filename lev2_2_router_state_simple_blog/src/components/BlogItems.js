import { Link } from 'react-router-dom'

const BlogItems = (props) => {
    return (
        <section>
            <img src={props.img} alt="random" />
            <p>{props.title}</p>
            <Link to={`/blog/${props.id}`}>Read more</Link>
        </section>
    );
}

export default BlogItems;