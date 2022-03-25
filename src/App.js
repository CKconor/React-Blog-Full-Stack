import { useState, useEffect } from 'react';
import { db } from './firebase.config';
import { collection, getDocs } from "firebase/firestore";
import SimpleDateTime from 'react-simple-timestamp-to-date';
import Container from './components/Container';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const blogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(blogCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getPosts();
  }, []);
  return (

    <div className="App">
      {posts.map((post => {
        return (
          <Container>
          <div key={post.id}>
            <h1 className="font-bold">Welcome to my Blog</h1>
            <h2 className='font-bold'>{post.title}</h2>
            <span>Posted: </span><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{post.timestamp}</SimpleDateTime>
            <h3>{post.content}</h3>
          </div>
          </Container>
        )
      }))}
    </div>
  );
}

export default App;
