import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./Firebase";

export const Account = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email);
            } else {
                setUser(null);
            }
        }
        );
    }, [user]);

    return (
        <div className="account">
            <h2>Account Details</h2>
            {<p>Username: {user}</p>}
        </div>

    )
}
