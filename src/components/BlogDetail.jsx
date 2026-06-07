const BlogDetail = ({ blog, onBack }) => {
  if (!blog) return null;

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 text-orange-500 font-bold"
        >
          ← Back to Blogs
        </button>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-3xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-6 text-white">
          {blog.title}
        </h1>

        <div className="text-slate-300 whitespace-pre-line leading-8">
          {blog.content}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;