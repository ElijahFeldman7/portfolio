import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../blog-posts.js';

function BlogPost() {
  const { uid } = useParams();
  const post = blogPosts.find(p => p.uid === uid);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    if (post) {
      fetch(`/blog/${post.uid}.html`)
        .then(response => response.text())
        .then(text => setPostContent(text))
        .catch(error => console.error('Error fetching post content:', error));
    }
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      <main className="max-w-4xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8">
          <h1 className="text-5xl font-bold">{post.title}<span className="text-[var(--accent)]">.</span></h1>
          <p className="text-gray-400 text-lg mt-2">{post.date} - {post.topic}</p>
        </div>
        <img src={post.image} alt={post.title} className="w-full max-w-full h-auto my-8 rounded-lg"/>
        <div className="text-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: postContent }} />
      </main>
    </div>
  );
}

export default BlogPost;
