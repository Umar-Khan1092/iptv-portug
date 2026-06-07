const BlogCard = ({ blog, onReadMore }) => {
  return (
    <div className="bg-slate-900/70 backdrop-blur-sm border border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:border-orange-500 transition-all duration-300">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">
          {blog.title}
        </h3>

        <p className="text-slate-300">
          {blog.excerpt}
        </p>

        <button
          onClick={() => onReadMore(blog)}
          className="mt-5 text-orange-500 font-bold hover:text-orange-400"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;