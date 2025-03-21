
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface CTAProps {
  className?: string;
}

const CallToAction = ({ className }: CTAProps) => {
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (elementsRef.current) {
      const animatedElements = elementsRef.current.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (elementsRef.current) {
        const animatedElements = elementsRef.current.querySelectorAll(".animate-on-scroll");
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section id="contact" className={`py-24 ${className || ""}`} ref={elementsRef}>
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-slate-50 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12 lg:p-16 animate-on-scroll">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6">
                <span className="text-xs font-semibold text-blue-600">Get Started</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
                Transform your collection operations today
              </h2>
              <p className="text-slate-600 mb-8">
                Join hundreds of financial institutions that have improved their 
                collection efficiency, increased recovery rates, and enhanced 
                customer experience with Xelend.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Easy integration with existing systems", "Personalized onboarding and support", "Flexible pricing options"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 font-medium rounded-md bg-primary text-white hover:bg-blue-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#demo"
                  className="px-6 py-3 font-medium rounded-md border border-blue-200 text-primary hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 lg:p-16 animate-on-scroll">
              <h3 className="text-2xl font-bold text-white mb-6">Contact us</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-md mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
