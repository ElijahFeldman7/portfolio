import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../blog-posts.js';
import SEO from '../components/SEO';

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
    <div className="min-h-screen flex flex-col">
      <SEO
        title={post.title}
        description={post.info}
        path={`/blog/${post.uid}`}
      />
      <main className="max-w-6xl mx-auto w-full text-left px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">{post.title}</h1>
            <p className="text-gray-400 text-sm md:text-base mt-2">{post.date} - {post.topic}</p>
          </div>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-auto my-8 rounded-lg max-w-full"/>
        <div className="text-base md:text-lg leading-relaxed max-w-full break-words" dangerouslySetInnerHTML={{ __html: postContent }} />
      </main>
    </div>
  );
}

export default BlogPost;
