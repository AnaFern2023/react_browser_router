import { useParams } from 'react-router-dom'
import blogData from '../data/blogData'


const BlogDetails = () => {

    const blogParams = useParams()
    console.log(blogParams);
    console.log(blogParams.id);
    console.log(blogData);

    const detailBlog = blogData.filter((element) => {
        return element.id.toString() === blogParams.id
    })
    console.log(detailBlog);
    return (
        <section className='detail_section'>
            <img src={detailBlog[0].img_url} alt="random" />
            <div >
                <h1>{detailBlog[0].title}</h1>
                <p>{detailBlog[0].published_date}</p>
            </div>
            <p>{detailBlog[0].description}</p>
            <p>by {detailBlog[0].author}</p>
        </section>
    );

}

export default BlogDetails;