import { useRef, useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    if (formData.file) {
      payload.append("file", formData.file);
    }

    try {
      await axios.post(
        "https://doscanpdf.com/api/Contact-Us/contact",
        payload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "", file: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  return (
    <section id="contact" className="py-14 bg-white scroll-mt-10">
      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you!</DialogTitle>
            <DialogDescription>
              Your message has been submitted.<br />We appreciate your feedback and will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <DialogClose asChild>
              <button className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Close</button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions, suggestions, or need support? We'd love to hear
              from you.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're experiencing issues, have feature requests, or
                just want to share your experience with Do Scan, we're here to
                help.
              </p>
            </div>

            <div className="space-y-6">
              <div data-aos="fade-up" data-aos-delay="600">
                <Card className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Email Support
                    </h4>
                    <p className="text-gray-600">support@doscanpdf.com</p>
                    <p className="text-sm text-gray-500">
                      Response within 24 hours
                    </p>
                  </div>
                </Card>
              </div>

              {/* <div data-aos="fade-up" data-aos-delay="300">
                <Card className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 96389 87317</p>
                  </div>
                </Card>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-up" data-aos-delay="600">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div>
                  <Label
                    htmlFor="file"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload File{" "}
                    <span className="text-gray-400">(optional)</span>
                  </Label>
                  <div className="flex items-center mt-2">
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="cursor-pointer"
                    />
                    {formData.file && (
                      <span className="ml-4 text-sm text-gray-600 truncate max-w-[200px]">
                        {formData.file.name}
                      </span>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
