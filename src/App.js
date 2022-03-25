import { useState, useEffect } from 'react';
import { db } from './firebase.config';
import { collection, doc, getDocs } from "firebase/firestore";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const blogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(blogCollectionRef);
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };
    getPosts();
  },[]);
  return (

    <div className="App">
      {posts.map((post => {
        return (
          <div key={post.id}><h1>{post.title}</h1>
          <h3>{post.content}</h3></div>
        )
      }))}
    </div>
  );
}

export default App;
