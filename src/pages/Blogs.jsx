import React from 'react'
import { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

function Blogs() {
    const [posts, setPosts] = useState([]);
  const blogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(blogCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div className="flex flex-row mt-10"><h1 className="text-5xl font-bold mb-0 mt-0">
    Blogs
  </h1></div>
  )
}

export default Blogs