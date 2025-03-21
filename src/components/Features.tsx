
import { useEffect, useRef } from "react";
import { Check, BarChart3, Calendar, Users, FileText, Shield, Zap } from "lucide-react";

interface FeatureProps {
  className?: string;
}

const Features = ({ className }: FeatureProps) => {
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
  
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Gain real-time insights into collection performance and identify optimization opportunities."
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Automated Workflows",
      description: "Streamline collection processes with intelligent automation and reduce manual intervention."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Customer Segmentation",
      description: "Target the right customers with the right approach at the right time for maximum efficiency."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Compliance Management",
      description: "Stay compliant with regulatory requirements and reduce risk with built-in compliance tools."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Integration",
      description: "Seamlessly integrate with existing systems using our secure API and connectors."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Performance Optimization",
      description: "Continuously optimize collection strategies based on performance data and outcomes."
    }
  ];
  
  return (
    <section id="features" className={`py-24 ${className || ""}`} ref={elementsRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-4">
            <span className="text-xs font-semibold text-blue-600">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Powerful features to transform your collection process
          </h2>
          <p className="text-slate-600">
            Our comprehensive solution provides everything you need to modernize 
            your collection operations and maximize recovery rates while enhancing 
            the customer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
              
              <ul className="mt-4 space-y-2">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">Feature benefit {i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 animate-on-scroll">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            
            <div className="relative z-10 px-8 py-16 md:p-16 text-center md:text-left">
              <div className="md:flex items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                    Ready to revolutionize your collection process?
                  </h3>
                  <p className="text-blue-100 mb-8 max-w-md">
                    Join leading financial institutions using Xelend to transform their 
                    collection operations and improve recovery rates.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                      href="#contact"
                      className="px-6 py-3 font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-lg"
                    >
                      Get Started
                    </a>
                    <a
                      href="#demo"
                      className="px-6 py-3 font-medium rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">95%</div>
                        <div className="text-sm text-blue-100">Customer satisfaction</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
