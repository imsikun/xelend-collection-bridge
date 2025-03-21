
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Solutions", "Pricing", "Demo", "Integrations"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "News", "Contact"]
    },
    {
      title: "Resources",
      links: ["Blog", "Guides", "Customer Stories", "Documentation", "Security"]
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"]
    }
  ];
  
  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
                Xelend
              </span>
            </a>
            <p className="text-slate-600 mb-6 max-w-xs">
              Empowering financial institutions with full-stack extension plugins for 
              streamlined operations and enhanced customer experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-slate-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Xelend. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
