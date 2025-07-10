
import { Smartphone, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Smartphone className="h-8 w-8" style={{ color: '#2147A8' }} />
              <span className="ml-2 text-2xl font-bold">Do Scan</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your smartphone into a powerful document scanner. 
              Scan, enhance, and organize your documents with AI-powered precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="mt-1">
              <h4 className="text-lg font-semibold mb-6">Download App</h4>
              <div className="space-y-2">
                <a href="https://apps.apple.com/in/app/pdf-document-scanner-do-scan/id6463594435" target="_blank" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  📱 Download for iOS
                </a>
                <a href="https://play.google.com/store/apps/details?id=document.scanner.photo.pdf.converter&hl=en_IN" target="_blank" className="block text-gray-400 hover:text-white transition-colors text-sm">
                🤖 Download for Android
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
