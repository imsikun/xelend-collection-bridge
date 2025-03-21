
import { useEffect, useRef } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
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
    <section className={`relative min-h-screen pt-32 pb-16 overflow-hidden ${className || ""}`} ref={elementsRef}>
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200 filter blur-[120px]" />
        <div className="absolute bottom-[-10%] right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-200 filter blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6 animate-on-scroll">
              <span className="text-xs font-semibold text-blue-600 mr-2">New</span>
              <span className="text-xs text-slate-600">Collection management software</span>
              <ChevronRight className="h-4 w-4 text-slate-400 ml-1" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display mb-6 animate-on-scroll">
              <span className="hero-text-gradient">Full-stack extension plugin</span> for financial institutions
            </h1>
            
            <p className="text-slate-600 text-lg mb-8 animate-on-scroll">
              Empower your financial institution with our comprehensive collection 
              management solution. Streamline operations, increase recovery rates, 
              and enhance customer experience with Xelend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
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
                Request Demo
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6 animate-on-scroll">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600">
                    From over <span className="font-semibold">100+</span> reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-20 blur-2xl animate-pulse-slow"></div>
              <div className="glass-card rounded-xl p-1 overflow-hidden relative z-10">
                <div className="bg-white/95 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop" 
                    alt="Dashboard Preview" 
                    className="w-full h-auto object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <h3 className="font-medium text-slate-900">Collection Dashboard</h3>
                        <p className="text-sm text-slate-500">Real-time analytics and insights</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-100 rounded animate-pulse w-3/4"></div>
                      <div className="h-2 bg-slate-100 rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 z-20 glass-card p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Recovery Rate</p>
                  <p className="text-xs text-slate-500">Increased by 35%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 z-20 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Cost Reduction</p>
                  <p className="text-xs text-slate-500">Decreased by 28%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 animate-on-scroll">
          <p className="text-sm text-slate-500 md:w-1/3">Trusted by financial institutions worldwide</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:w-2/3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-slate-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
