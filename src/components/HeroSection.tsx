import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, Download, LogIn, ScanLine } from "lucide-react";
import HeroSectionImage from "../../public/images/hero-section.webp";
import playStore from "../../public/images/playstoreButton.webp";
import appStore from "../../public/images/appleButton.webp";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8" data-aos="fade-up">
            <div className="flex items-center mb-6">
              <ScanLine className="h-12 w-12" style={{ color: "#2147A8" }} />
              <h1 className="ml-4 text-4xl lg:text-6xl font-bold text-gray-900">
                Do Scan
              </h1>
            </div>

            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Scan. Save. Share.
              <span className="block" style={{ color: "#2147A8" }}>
                Effortlessly.
              </span>
            </h2>

            <p
              className="text-xl text-gray-600 mb-4 sm:mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Do Scan helps you digitize documents, receipts, and notes in
              seconds. Transform your phone into a powerful document scanner
              with AI-powered enhancement.
            </p>

            <div className="flex flex-row gap-4 mb-8" data-aos="fade-up" data-aos-delay="600">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=document.scanner.photo.pdf.converter&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[160px] h-[48px] overflow-hidden rounded-[9999px] group bg-black"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 group-hover:-translate-y-full"
                />
                <img
                  src={playStore}
                  alt="Google Play Hover"
                  className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                />
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/pdf-document-scanner-do-scan/id6463594435"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[160px] h-[48px] overflow-hidden rounded-[9999px] group bg-black"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 group-hover:-translate-y-full"
                />
                <img
                  src={appStore}
                  alt="App Store Hover"
                  className="absolute inset-0 w-full h-full object-contain px-6 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                />
              </a>
            </div>

            <div
              className="flex items-center gap-8 text-sm text-gray-600"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <div
                    className="font-bold text-lg"
                    style={{ color: "#2147A8" }}
                  >
                    4.5
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">★★★★★</div>
                  <div>10k+ Trusted Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div
            className="hidden lg:block mt-12 lg:mt-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={HeroSectionImage}
                alt="App Preview"
                className="w-full max-h-[700px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#2147A8] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
