import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./Firebase";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar  = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const hanldleSignOut = () => {
        auth.signOut();
        navigate('/');
        
    };
    useEffect(() => {
       onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [user]);
    return (
        <nav className="navbar">
            <h1> The Tuts Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    // color: 'white',
                    // backgroundColor: '#f1356d',
                    // borderRadius: '8px'
                }}>New Blog</Link>
                <Link onClick={hanldleSignOut}>Logout</Link>
                {user && <Link to="/account">Account</Link>}
            </div>
        </nav>
    );
}
 
export default Navbar;