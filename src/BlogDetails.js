import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './Firebase';

// BlogDetails component
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(id);
    // console.log(blog);
    const navigate = useNavigate();
    
    const handleDelete = () => {
        const docRef = doc(db, "blogs", id);
        deleteDoc(docRef).then(() => {
            console.log("Document successfully deleted!");
            navigate('/');
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });

      
    }
    const handleEdit = () => {
        navigate('/editblogs/'+ id)
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete}>Delete</button>
                    <button id='editbtn' onClick={handleEdit}>Edit</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;