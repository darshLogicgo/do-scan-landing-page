import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Card } from '@/components/ui/card';
import { Crop, Type, FileText, FolderOpen, Shield, TextSearch, Cloud, Folder, FileUp } from 'lucide-react';

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const features = [
    {
      title: 'Auto-Cropping',
      description: 'Intelligent edge detection automatically crops your documents to perfection',
      icon: Crop,
      gradient: 'from-[#2147A8] to-[#1d3d96]',
    },
    {
      title: 'Smart OCR',
      description: 'Extract text from scanned images or PDFs with high accuracy using built-in OCR',
      icon: TextSearch,
      gradient: 'from-[#D72638] to-[#A61B2B]',
    },
    {
      title: 'PDF Management',
      description: 'Merge, split, rename, or delete PDFs with ease from your document dashboard',
      icon: FileText,
      gradient: 'from-[#38BDF8] to-[#0EA5E9]',
    },
    {
      title: 'Cloud Sync',
      description: 'Access your scanned documents across devices by logging into your account',
      icon: Cloud,
      gradient: 'from-[#22C55E] to-[#16A34A]',
    },
    {
      title: 'Folder Organization',
      description: 'Organize files into folders and keep your documents clean and searchable',
      icon: Folder,
      gradient: 'from-[#F59E0B] to-[#D97706]',
    },
    {
      title: 'Multi-format Support',
      description: 'Upload and download in various formats like PDF, JPG, and PNG',
      icon: FileUp,
      gradient: 'from-[#8B5CF6] to-[#7C3AED]',
    },
  ]
  

  return (
    <section id="features" className="pt-14 scroll-mt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div data-aos="fade-up" data-aos-delay="0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to digitize, organize, and manage your documents efficiently
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
