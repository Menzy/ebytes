import { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const useFetch = (id=null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();

    // setTimeout(() => {
      if (id === null) {
        // Give us all the data in the "blogs" collection
      const querySnapshot = getDocs(collection(db, "blogs"));
      querySnapshot.then((querySnapshot) => {
        // console.log(querySnapshot.docs.forEach(doc => console.log(doc.data())))
        const blogs = querySnapshot.docs.map(doc => {
         
          return { ...doc.data(), id: doc.id }
        });
        // console.log(blogs);
        setData(blogs);
        setIsPending(false);
        setError(null);
      });
    } else {
      // Give us the data in the "blogs" collection with the id of "id"
      const docRef = doc(db, "blogs", id);
      const docSnap = getDoc(docRef);
      docSnap.then((doc) => {
        if (doc.exists()) {
          console.log("Document data:", doc.data());
          setData(doc.data());
          setIsPending(false);
          setError(null);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
    }

    //   fetch(url, { signal: abortCont.signal })
    //   .then(res => {
    //     if (!res.ok) { // error coming back from server
    //       throw Error('could not fetch the data for that resource');
    //     } 
    //     return res.json();
    //   })
    //   .then(data => {
    //     setIsPending(false);
    //     setData(data);
    //     setError(null);
    //   })
    //   .catch(err => {
    //     if (err.name === 'AbortError') {
    //       console.log('fetch aborted')
    //     } else {
    //       // auto catches network / connection error
    //       setIsPending(false);
    //       setError(err.message);
    //     }
    //   })
    // }, 1000);

    // abort the fetch
    // return () => abortCont.abort();
  }, [id])

  return { data, isPending, error };
}
 
export default useFetch;