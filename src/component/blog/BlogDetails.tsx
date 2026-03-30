import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogPosts.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      <Link to="/" className="text-orange-500 text-sm">
        ← Back to Blogs
      </Link>

      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="mt-6 w-full h-[450px] object-cover rounded"
      />

      <div className="mt-6 whitespace-pre-line text-gray-700">
        {blog.content}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-orange-50 p-6 rounded text-center">
        <h3 className="font-semibold">
          Want to install solar?
        </h3>
        <button className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-full">
          Get Free Consultation
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;