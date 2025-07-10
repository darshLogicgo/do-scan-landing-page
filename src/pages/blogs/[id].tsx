import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useQuery";
import { ROUTE_PATH } from "@/config/api-routes.config";
import { QUERY_KEYS } from "@/config/query.const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

interface Blog {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  createdAt: string;
  content?: string;
}

interface BlogResponse {
  data: Blog;
}

const BlogDetail = () => {
  const { id } = useParams();

  const {
    data: response,
    isLoading,
    isError,
  } = useFetch<BlogResponse>(
    [QUERY_KEYS.GET_SINGLE_BLOG, id!],
    `${ROUTE_PATH.BLOGS.GET_SINGLE}/${id}`
  );

  const blog = response?.data;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />

      {/* max‑width increases at lg to keep lines readable on big screens */}
      <main className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto pt-24 px-4 lg:px-6 pb-16 min-h-screen">
        {isError && (
          <p className="text-center text-red-500 text-base md:text-lg">
            Failed to load blog.
          </p>
        )}

        {!isLoading && blog && (
          <>
           {/* Title */}    
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 break-words leading-snug sm:leading-tight lg:leading-[1.3]">
              {blog.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-sm md:text-base text-gray-700 mb-6 break-words leading-relaxed sm:leading-loose">
              {blog.description}
            </p>

            {/* Cover Image */}
            <div className="mb-8">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full h-60 sm:h-72 lg:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>

            {/* HTML Content */}
            {blog.content && (
              <div
                className="blog-content prose max-w-none text-gray-800
                           prose-sm sm:prose-base lg:prose-lg xl:prose-xl"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
