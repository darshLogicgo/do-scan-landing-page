import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ReviewsSection.css";

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      rating: 5,
      comment:
        "Do Scan has revolutionized how I handle receipts and invoices. The OCR feature is incredibly accurate and saves me hours of manual data entry.",
      avatar: "SJ",
      color: "#2147A8",
    },
    {
      name: "Michael Chen",
      role: "Student",
      rating: 5,
      comment:
        "Scanning my lecture notes and textbooks is so easy now. Auto-crop and PDF export make it perfect for everyday student needs and study material.",
      avatar: "MC",
      color: "#2147A8",
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      rating: 5,
      comment:
        "The fast scans and smooth interface are amazing. I can easily sort my client files with folders and get high-quality documents every time.",
      avatar: "ER",
      color: "#2147A8",
    },
    {
      name: "Amit Patel",
      role: "Accountant",
      rating: 4,
      comment:
        "I use the Excel export weekly—especially helpful during tax season. It simplifies document management for accountants and saves a lot of valuable time.",
      avatar: "AP",
      color: "#2147A8",
    },
    {
      name: "Linda Kim",
      role: "Teacher",
      rating: 5,
      comment:
        "Great for digitizing homework, handouts, and notes. It’s quick, user-friendly, and helps me manage all class materials efficiently in one place.",
      avatar: "LK",
      color: "#2147A8",
    },
    {
      name: "Carlos Gomez",
      role: "Project Manager",
      rating: 4,
      comment:
        "I use Do Scan to manage all my documents while traveling. It helps me keep files accessible and organized across multiple ongoing projects.",
      avatar: "CG",
      color: "#2147A8",
    },
    {
      name: "Priya Singh",
      role: "Consultant",
      rating: 5,
      comment:
        "Batch scanning multiple pages is smooth and fast. The modern UI is refreshing, and it keeps my client records neatly stored and accessible.",
      avatar: "PS",
      color: "#2147A8",
    },
    {
      name: "John Doe",
      role: "Freelancer",
      rating: 5,
      comment:
        "Very easy to use with great features. It’s a dependable tool I’ve recommended to peers for organizing freelance work and invoices hassle-free.",
      avatar: "JD",
      color: "#2147A8",
    },
  ];

  return (
    <section id="reviews" className="pt-14 scroll-mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of users worldwide
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="text-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="pb-0 sm:pb-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index} className="flex justify-center">
              <Card className="w-full max-w-[400px] mx-auto h-[200px] sm:h-[230px] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                {/* Header: Avatar + Name + Stars */}
                <div className="flex justify-between items-start mb-4">
                  {/* Left: Avatar + Name + Role */}
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-3"
                      style={{ backgroundColor: review.color }}
                    >
                      {review.avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
            
                  {/* Right: Stars aligned to top */}
                  <div className="flex items-center mt-1 space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
            
                {/* Comment */}
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{review.comment}"
                </p>
              </Card>
            </SwiperSlide>
            
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="swiper-pagination-custom mt-6" />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
