
import { useState } from "react";
import { Check, BarChart3, Calendar, Users, FileText, Shield, Zap, X, ArrowRight, FolderCog, Route, UserCheck, BellRing, Link2, LineChart, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  className?: string;
}

const Features = ({ className }: FeatureProps) => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: <FolderCog className="h-6 w-6 text-blue-600" />,
      title: "End-to-End Collections Management",
      description: "Oversee the entire collections lifecycle, from lead sourcing to debt recovery.",
      benefits: [
        "Centralized management of all collection activities",
        "Seamless tracking of case progression",
        "Automated escalation workflows"
      ],
      details: "Our comprehensive collections management system provides full visibility and control over the entire debt recovery process. From initial debtor identification to final settlement, the platform guides collection teams through each step with intelligent workflows, automated documentation, and real-time performance tracking.",
      image: "/collection-management.jpg"
    },
    {
      icon: <Route className="h-6 w-6 text-blue-600" />,
      title: "Intelligent Task Allocation",
      description: "Optimize field assignments, route planning, and tracking to maximize operational efficiency.",
      benefits: [
        "Smart workload distribution among teams",
        "Geographical route optimization",
        "Real-time field agent tracking"
      ],
      details: "Our AI-powered task allocation system ensures each collector handles the right cases at the right time. The platform considers agent expertise, case complexity, geographical proximity, and historical performance to assign tasks optimally. The built-in route planning minimizes travel time while maximizing productive collection visits.",
      image: "/task-allocation.jpg"
    },
    {
      icon: <UserCheck className="h-6 w-6 text-blue-600" />,
      title: "Comprehensive Customer Insights",
      description: "Gain a 360° view of payment history, customer interactions, and risk profiling.",
      benefits: [
        "Complete customer interaction history",
        "Behavioral scoring and risk assessment",
        "Personalized collection strategy recommendations"
      ],
      details: "Get a complete understanding of each customer's financial behavior with our advanced profiling system. The platform analyzes payment history, communication preferences, past interactions, and social indicators to provide actionable insights that help tailor collection strategies to individual circumstances.",
      image: "/customer-insights.jpg"
    },
    {
      icon: <BellRing className="h-6 w-6 text-blue-600" />,
      title: "Automated Follow-Ups & Digital Payments",
      description: "Streamline customer engagement through automated reminders, instant payment links, and multi-channel communication.",
      benefits: [
        "Scheduled follow-ups across multiple channels",
        "One-click payment processing",
        "Personalized communication templates"
      ],
      details: "Automate routine follow-ups while maintaining a personal touch. The system schedules and delivers reminders via SMS, email, voice calls, and WhatsApp based on customer preferences. Integrated payment gateways enable debtors to settle payments instantly through secure links, significantly improving recovery rates.",
      image: "/automated-followups.jpg"
    },
    {
      icon: <Link2 className="h-6 w-6 text-blue-600" />,
      title: "Seamless Operational Integration",
      description: "Enhance team productivity and collection strategies without extensive implementation efforts.",
      benefits: [
        "Easy integration with existing banking systems",
        "Minimal implementation timelines",
        "Customizable workflows to match processes"
      ],
      details: "Deploy Xelend with minimal disruption to your existing operations. Our platform connects seamlessly with core banking systems, CRMs, and payment processors through secure APIs. The intuitive interface requires minimal training, allowing your team to start seeing results within days, not months.",
      image: "/operational-integration.jpg"
    },
    {
      icon: <LineChart className="h-6 w-6 text-blue-600" />,
      title: "Data-Driven Decision Making",
      description: "Leverage real-time analytics to refine strategies, improve recovery rates, and track performance metrics.",
      benefits: [
        "Customizable performance dashboards",
        "Predictive analytics for recovery forecasting",
        "Automated reporting and insights"
      ],
      details: "Transform your collection strategy with actionable data insights. Our analytics engine processes thousands of data points to identify patterns, predict outcomes, and recommend optimizations. Executive dashboards provide real-time visibility into key performance indicators, helping managers make informed decisions quickly.",
      image: "/data-analytics.jpg"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: "Regulatory Compliance & Security",
      description: "Maintain adherence to financial regulations with audit trails, encrypted data, and secure transactions.",
      benefits: [
        "Automatic compliance with regional regulations",
        "Complete audit trails for all activities",
        "Enterprise-grade data encryption"
      ],
      details: "Stay compliant with ever-changing financial regulations without additional effort. The platform automatically applies regional compliance rules to collection activities, maintains detailed audit logs, and secures all data with enterprise-grade encryption. Built-in consent management ensures all customer interactions follow legal guidelines.",
      image: "/regulatory-compliance.jpg"
    }
  ];
  
  const handleOpenFeature = (index: number) => {
    setSelectedFeature(index);
  };
  
  const handleCloseFeature = () => {
    setSelectedFeature(null);
  };
  
  return (
    <section id="features" className={`py-24 ${className || ""}`}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
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
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleOpenFeature(index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              
              <div className="flex items-center mt-4 text-blue-600 group">
                <span className="font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature Detail Dialog */}
        <Dialog open={selectedFeature !== null} onOpenChange={handleCloseFeature}>
          <DialogContent className="sm:max-w-4xl">
            {selectedFeature !== null && features[selectedFeature] && (
              <>
                <DialogHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                      {features[selectedFeature].icon}
                    </div>
                    <DialogTitle className="text-2xl font-bold">
                      {features[selectedFeature].title}
                    </DialogTitle>
                  </div>
                  <DialogDescription>
                    {features[selectedFeature].description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {features[selectedFeature].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold text-lg mt-6 mb-4">How It Works</h4>
                    <p className="text-slate-700">
                      {features[selectedFeature].details}
                    </p>
                    
                    <Button className="mt-6">
                      Request a Demo
                    </Button>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden border border-slate-200">
                    <img 
                      src={features[selectedFeature].image} 
                      alt={features[selectedFeature].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        <div className="mt-20 animate-fade-in">
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
