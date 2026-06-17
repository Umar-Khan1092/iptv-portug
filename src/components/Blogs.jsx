import { useState, useEffect } from "react";
import blogs from "../blogs";
import BlogCard from "./BlogCard";

const Blogs = ({ activeTab, setActiveTab }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (activeTab && activeTab.startsWith('blogs/')) {
      const slug = activeTab.split('/')[1];
      const foundBlog = blogs.find(b => b.slug === slug);
      setSelectedBlog(foundBlog || null);
    } else {
      setSelectedBlog(null);
    }
  }, [activeTab]);

  if (selectedBlog) {
    return (
      <section className="min-h-screen py-20 bg-gradient-to-br from-purple-950 via-slate-950 to-cyan-950">
        <div className="max-w-4xl mx-auto px-4">

          <button
            onClick={() => setActiveTab('blogs')}
            className="mb-8 text-orange-500 font-bold hover:text-orange-400"
          >
            ← Back to Blogs
          </button>

          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full rounded-3xl mb-8"
          />

          <h1 className="text-4xl font-bold text-white mb-6">
            {selectedBlog.title}
          </h1>

          <div className="text-slate-300 leading-8 whitespace-pre-line">
            {selectedBlog.content}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-purple-950 via-slate-950 to-cyan-950">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-5xl font-black text-white">
            Latest Blogs
          </h2>

          <p className="text-slate-300 mt-4">
            IPTV Guides, Sports Streaming Tips & More
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onReadMore={() => setActiveTab(`blogs/${blog.slug}`)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
