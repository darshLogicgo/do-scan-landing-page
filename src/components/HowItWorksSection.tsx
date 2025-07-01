
import { Card } from '@/components/ui/card';
import { Smartphone, ScanLine, Crop, Save } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Open the App',
      description: 'Launch Do Scan and tap the scan button to get started',
      icon: Smartphone,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      step: '02', 
      title: 'Scan or Upload',
      description: 'Capture documents with your camera or upload from gallery',
      icon: ScanLine,
      color: 'bg-green-100 text-green-600'
    },
    {
      step: '03',
      title: 'Auto-Crop & Enhance',
      description: 'AI automatically crops and enhances your document quality',
      icon: Crop,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      step: '04',
      title: 'Save or Share',
      description: 'Export as PDF, save to cloud, or share instantly',
      icon: Save,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Do Scan in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="relative mb-6">
                <div className={`w-16 h-16 ${step.color} rounded-2xl mx-auto flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 bg-brand-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-2 h-2 bg-brand-600 rounded-full" />
                {i < 2 && <div className="w-8 h-px bg-gray-300 mx-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
