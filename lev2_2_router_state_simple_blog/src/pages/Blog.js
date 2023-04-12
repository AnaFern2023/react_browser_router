import blogData from "../data/blogData"
import BlogItems from "../components/BlogItems";
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog_grid">
            {blogData.map((element) => {
                console.log(element);
                return (
                    <BlogItems
                        key={element.id}
                        img={element.img_url}
                        title={element.title}
                        id={element.id}
                    />
                )
            })}
        </section>
    );
}

export default Blog;