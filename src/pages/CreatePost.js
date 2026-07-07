import React, { useState } from 'react';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [info, setInfo] = useState('');
  const [image, setImage] = useState('');
  const [generatedJson, setGeneratedJson] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uid = `${new Date().toISOString().slice(0, 10)}-${title.toLowerCase().replace(/\s+/g, '-')}`;
    const newPost = {
      uid,
      title,
      date: new Date().toISOString().slice(0, 10),
      topic,
      image: `/blog/${image}`,
      info,
    };
    setGeneratedJson(JSON.stringify(newPost, null, 2));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center text-white">
      <main className="max-w-2xl mx-auto text-left pt-0 px-4 flex-1 flex flex-col justify-start bg-neutral-900 bg-opacity-70 p-4">
        <div className="mt-8">
          <h1 className="text-5xl font-bold">Create New Blog Post<span className="text-[var(--accent)]">.</span></h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Blog post content..."
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Image file name (e.g., my-image.png)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-bold transition-colors duration-300">
            Generate Post Code
          </button>
        </form>

        {generatedJson && (
          <div className="mt-8 p-4 bg-gray-800 rounded-md border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Generated Code:</h2>
            <p className="mb-2">1. Copy the code below and add it to the top of your <code className="bg-gray-900 px-1 rounded">src/blog-posts.json</code> file (inside the main `[` brackets).</p>
            <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto"><code>{generatedJson}</code></pre>
            <p className="mt-4 mb-2">2. Make sure you have an image named <code className="bg-gray-900 px-1 rounded">{image}</code> in your <code className="bg-gray-900 px-1 rounded">public/blog/</code> directory.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default CreatePost;
