import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "Is Do Scan free to use?",
      answer:
        "Do Scan offers a free version with basic scanning features. Premium features like OCR text recognition, cloud storage, and advanced editing tools are available with our Pro subscription.",
    },
    {
      question: "How do I upload my documents to DoScan?",
      answer:
        "Simply click the upload icon or drag and drop your files into the upload area. Supported file formats include PDF, JPG, PNG, and more.",
    },
    {
      question: "Can I scan multiple pages into one PDF?",
      answer:
        "Yes! Do Scan supports multi-page scanning. You can scan multiple documents and combine them into a single PDF file for easy sharing and storage.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use end-to-end encryption for all document uploads and storage. Your documents are stored securely in the cloud and only accessible by you.",
    },
    {
      question: "Can I organize my scanned files into folders?",
      answer:
        "Yes, DoScan allows you to manage your documents using folders. You can create folders, rename them, and move files into them to stay organized.",
    },
    {
      question: "Is there a file size limit for uploads?",
      answer:
        "While DoScan allows for high-quality uploads, we recommend keeping individual files under 20MB for optimal performance. For larger files, consider compressing them before uploading.",
    },
    {
      question: "How long are my files stored on DoScan?",
      answer:
        "Your files remain on DoScan as long as your account is active. You can delete them anytime from your dashboard.",
    },
    {
      question: "Can I share my scanned documents directly from DoScan?",
      answer:
        "Yes, DoScan allows you to generate shareable links or download files for emailing or cloud storage sharing.",
    },
  ];

  return (
    <section id="faq" className="pt-14 bg-gray-50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with animation */}
        <div className="text-center mb-16">
          <div data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
        </div>

        {/* FAQs with animation */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-white rounded-lg border border-gray-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
