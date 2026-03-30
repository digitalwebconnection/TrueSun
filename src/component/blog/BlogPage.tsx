import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl text-center font-bold mb-6 text-[#FC763A]"> Blogs</h1>

      <div className="grid md:grid-cols-2 gap-6 py-10">
        {blogPosts.map((post) => (
          <Link to={`/Knowledgwe/${post.id}`} key={post.id}>
            <div className="rounded-xl border border-black/20 p-4  shadow-xl hover:scale-105  hover:shadow-2xl transition">
              
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover rounded"
              />

              <h3 className="mt-3 font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.excerpt}</p>

              <span className="text-orange-500 text-sm">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;