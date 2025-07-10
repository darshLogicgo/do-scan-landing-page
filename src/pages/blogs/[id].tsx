import { Link, useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useQuery";
import { ROUTE_PATH } from "@/config/api-routes.config";
import { QUERY_KEYS } from "@/config/query.const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, MoveLeft, Share2 } from "lucide-react";

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

  const date = new Date("2025-03-13T09:24:19.353Z");
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tags = []

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Check out this blog!",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Sharing failed", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />

      {/* max‑width increases at lg to keep lines readable on big screens */}
      <main className="bg-gray-50">
        <div className=" mx-auto pt-24 px-4 lg:px-6 pb-16 min-h-screen max-w-2xl lg:max-w-3xl xl:max-w-[1500px]">
          <Link
            to={"/blogs"}
            className={`group inline-flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm mt-8 md:mt-16 px-6 py-3 rounded-2xl border border-gray-300/50 shadow-sm hover:shadow-md mb-12 font-light`}
            // className={`flex items-center w-fit  gap-3 hover:text-[#2147A8] shadow-md px-7 py-3 rounded-xl text-gray-600 bg-white mt-8 md:mt-16 mb-12`}
          >
            {" "}
            <ArrowLeft size={18} className="" /> Return to Blog Posts
          </Link>
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            {isError && (
              <p className="text-center text-red-500 text-base md:text-lg">
                Failed to load blog.
              </p>
            )}

            {!isLoading && blog && (
              <>
                <span className="text-center text-gray-500 font-medium text-[14px] mb-4 md:mb-6 flex items-center gap-3 justify-center">
                  <span className="bg-[#5c89fc] h-[8px] w-[8px] block rounded-lg"></span>
                  IMAGE OPTIMIZATION
                </span>

                {/* Title */}
                <h1 className="font-semibold text-4xl lg:text-6xl text-gray-900 mb-6 md:mb-8 break-words leading-snug sm:leading-tight lg:leading-[1.3] text-center">
                  {blog.title}
                </h1>

                {/* Description */}
                <p className="text-[18px] lg:text-[23px] text-gray-600 mb-10 max-w-3xl mx-auto font-light !leading-relaxed text-center">
                  {blog.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50">
                    <Calendar size={15} />
                    <span className="font-light">{formatted}</span>
                  </div>

                  <div
                    onClick={handleShare}
                    className="cursor-pointer flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50"
                  >
                    <Share2 size={15} />
                    <span className="font-light">Share</span>
                  </div>
                </div>

                {/* Tags */}

                <ul className="flex flex-wrap justify-center gap-2">
                  {tags?.map((item, index) => (
                    <li
                      key={index}
                      className="text-xs font-light bg-gray-100/80 text-gray-600 px-3 py-1.5 rounded-xl border border-gray-200/50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Cover Image */}
                <div className="py-8 md::py-18">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="w-full h-60 sm:h-72 lg:h-[460px] object-cover rounded-2xl shadow-md"
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
