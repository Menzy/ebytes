// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./Firebase";


const Home = () => {
   const { data: blogs, isPending, error } = useFetch();
    const [ user, setUser ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
                navigate('/auth'); // Redirect to the home page
            }
        });
        }, [user, navigate]);


    return (
        <div className="home">
            {/* <h2>Home Page</h2> */}
            <div className="home">
                {error && <div>{error}</div>}
                { isPending && <div>Loading...</div> }
                {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            </div>

        </div>
    );
}
 
export default Home;