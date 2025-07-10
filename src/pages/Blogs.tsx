import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner2 from "@/components/Banner";
import { Button } from "@/components/ui/button";
import NoDataFound from "@/components/NoDataFound";

import { ROUTE_PATH } from "@/config/api-routes.config";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/config/api.config";

/* ------------------------------------------------------------------ */
/* 📝 Blog Type                                                        */
/* ------------------------------------------------------------------ */
interface Blog {
  _id: string;
  title: string;
  description: string;
  cover_image: string;
  createdAt: string;
  slug: string;
}

interface BlogApiResponse {
  data: Blog[];
  total?: number; // Optional: if API returns total count
}

/* ------------------------------------------------------------------ */
/* 📄 Blogs Page                                                       */
/* ------------------------------------------------------------------ */
const LIMIT = 12;

const Blogs = () => {
  const navigate = useNavigate();
  const title = "Blogs & News";
  const description =
    "Explore articles, product updates, and smart tips to help you get the most out of Do Scan — from digital workflows to going fully paperless.";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const fetchBlogs = async (pageNum: number) => {
    setIsLoading(true);
    setIsError(false);
    try {
      // Assuming API supports ?limit=12&page=1
      const res = await api.get<BlogApiResponse>(`${ROUTE_PATH.BLOGS.GET_ALL}?limit=${LIMIT}&page=${pageNum}`);
      const newBlogs = res.data.data;
      setBlogs((prev) => (pageNum === 1 ? newBlogs : [...prev, ...newBlogs]));
      // If less than LIMIT returned, no more data
      setHasMore(newBlogs.length === LIMIT);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const renderBlogCard = (blog: Blog) => (
    <div
      key={blog._id}
      className="bg-[#f8f8f8] rounded-xl border border-gray-200 p-4 shadow hover:shadow-md transition cursor-pointer w-full max-w-md mx-auto"
      data-aos="fade-up"
      onClick={() => navigate(`/blogs/${blog.slug}`)}
    >
      <div className="w-full h-52 overflow-hidden rounded-lg mb-4 bg-gray-100">
        <img
          src={blog.cover_image}
          alt={`blog-${blog._id}`}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-sm text-gray-500 mb-1">{formatDate(blog.createdAt)}</p>
      <h3 className="text-lg font-semibold line-clamp-2 mb-2">{blog.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{blog.description}</p>
      <Button
        onClick={(e) => { e.stopPropagation(); navigate(`/blogs/${blog.slug}`); }}
        variant="outline"
        className="mt-4 inline-block text-primary font-medium text-sm border-[#ebebeb] text-black hover:bg-[#3B64D3] hover:text-white"
      >
        Read More
      </Button>
    </div>
  );

  const getGridClass = () => {
    if (blogs.length === 1) return "flex justify-center";
    if (blogs.length === 2) return "grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-3xl mx-auto";
    return "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <>
      <Header />
      <Banner2 title={title} description={description} />

      <div className="max-w-7xl mx-auto p-4 sm:p-8 mt-10">
        {isLoading && blogs.length === 0 && (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-[#3B64D3]" />
          </div>
        )}

        {isError && blogs.length === 0 && (
          <p className="text-center text-red-500">Failed to load blogs.</p>
        )}

        {!isLoading && !isError && blogs.length === 0 && (
          <NoDataFound
            message="Stay Tuned! Blogs Coming Soon."
            secondaryMessage="Currently, there are no blogs to display. Check back soon to explore our latest content here!"
          />
        )}

        {blogs.length > 0 && (
          <>
            <div className={getGridClass()}>
              {blogs.map(renderBlogCard)}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-8">
                <Button onClick={handleLoadMore} disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
