import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    const noBlogs = blogs.length === 0;
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {/* This is to display a message when there are no blogs in the database */}
            {noBlogs && <p>No Blogs Added. Create a new blog</p>}
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                ))}
        </div>
    );
}
 
export default BlogList;