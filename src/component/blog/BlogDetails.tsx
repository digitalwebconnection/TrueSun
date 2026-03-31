import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import LeadPopup from "../../component/LeadPopup";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  const blog = blogPosts.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

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
      <div className="mt-10 p-6 rounded text-center">
        
        <button onClick={() => setOpenLeadPopup(true)}
          className="px-6 py-2 bg-[#FC763A] rounded-full text-white">
          Get Free Consultation
        </button>
      </div>
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
    </div>
  );
};

export default BlogDetails;