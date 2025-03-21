
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedGradient from "@/components/AnimatedGradient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FeatureDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const features = [
    {
      id: "collection-management",
      title: "End-to-End Collections Management",
      description: "Oversee the entire collections lifecycle, from lead sourcing to debt recovery.",
      content: `Our comprehensive collections management system provides full visibility and control over the entire debt recovery process. From initial debtor identification to final settlement, the platform guides collection teams through each step with intelligent workflows, automated documentation, and real-time performance tracking.

The Xelend platform centralizes all case information, allowing collection agents to access complete debtor profiles, payment histories, and communication logs from a single dashboard. Our workflow automation ensures that cases progress through predefined stages, with appropriate actions triggered at each point.

Key capabilities include:
• Case prioritization based on recovery potential
• Automated document generation and distribution
• Integrated communication channels for customer engagement
• Settlement plan creation and tracking
• Performance analytics and recovery reporting`,
      image: "/collection-management.jpg"
    },
    {
      id: "task-allocation",
      title: "Intelligent Task Allocation",
      description: "Optimize field assignments, route planning, and tracking to maximize operational efficiency.",
      content: `Our AI-powered task allocation system ensures each collector handles the right cases at the right time. The platform considers agent expertise, case complexity, geographical proximity, and historical performance to assign tasks optimally. The built-in route planning minimizes travel time while maximizing productive collection visits.

The system automatically distributes cases to the most appropriate team members based on multiple factors including workload, case complexity, and previous success rates. For field agents, our geospatial optimization creates efficient routes that minimize travel time and fuel costs.

Key capabilities include:
• AI-driven case assignment algorithms
• Real-time field agent location tracking
• Dynamic route optimization
• Performance-based workload distribution
• Time and territory management tools`,
      image: "/task-allocation.jpg"
    },
    {
      id: "customer-insights",
      title: "Comprehensive Customer Insights",
      description: "Gain a 360° view of payment history, customer interactions, and risk profiling.",
      content: `Get a complete understanding of each customer's financial behavior with our advanced profiling system. The platform analyzes payment history, communication preferences, past interactions, and social indicators to provide actionable insights that help tailor collection strategies to individual circumstances.

Our customer insight engine aggregates data from multiple sources to build comprehensive debtor profiles. The system analyzes payment patterns, communication history, social media activity, and external credit data to predict payment likelihood and recommend optimal collection approaches.

Key capabilities include:
• Unified customer profile with complete payment history
• Behavioral scoring and risk assessment
• Communication preference tracking
• Relationship mapping for connected accounts
• Predictive payment analysis`,
      image: "/customer-insights.jpg"
    },
    {
      id: "automated-followups",
      title: "Automated Follow-Ups & Digital Payments",
      description: "Streamline customer engagement through automated reminders, instant payment links, and multi-channel communication.",
      content: `Automate routine follow-ups while maintaining a personal touch. The system schedules and delivers reminders via SMS, email, voice calls, and WhatsApp based on customer preferences. Integrated payment gateways enable debtors to settle payments instantly through secure links, significantly improving recovery rates.

Our intelligent communication system automates the entire follow-up process while personalizing messages based on customer profiles. The platform selects the optimal communication channel, timing, and message content to maximize response rates and payment commitments.

Key capabilities include:
• Multi-channel communication automation
• Smart scheduling based on response patterns
• Personalized message templates
• Instant payment links and QR codes
• Payment reminder escalation workflows`,
      image: "/automated-followups.jpg"
    },
    {
      id: "operational-integration",
      title: "Seamless Operational Integration",
      description: "Enhance team productivity and collection strategies without extensive implementation efforts.",
      content: `Deploy Xelend with minimal disruption to your existing operations. Our platform connects seamlessly with core banking systems, CRMs, and payment processors through secure APIs. The intuitive interface requires minimal training, allowing your team to start seeing results within days, not months.

We understand that implementation challenges often prevent organizations from adopting new technologies. Xelend is designed for rapid deployment with minimal IT resources. Our connector framework allows quick integration with existing systems while our intuitive interface reduces training requirements.

Key capabilities include:
• Pre-built connectors for major banking systems
• Secure API framework for custom integrations
• User-friendly interface requiring minimal training
• Phased implementation options
• Continuous support and optimization services`,
      image: "/operational-integration.jpg"
    },
    {
      id: "data-analytics",
      title: "Data-Driven Decision Making",
      description: "Leverage real-time analytics to refine strategies, improve recovery rates, and track performance metrics.",
      content: `Transform your collection strategy with actionable data insights. Our analytics engine processes thousands of data points to identify patterns, predict outcomes, and recommend optimizations. Executive dashboards provide real-time visibility into key performance indicators, helping managers make informed decisions quickly.

Xelend's advanced analytics turn raw collection data into actionable insights. The platform continuously monitors performance metrics, identifies trends, and suggests strategy adjustments to improve recovery rates. Customizable dashboards give stakeholders the exact information they need.

Key capabilities include:
• Real-time performance dashboards
• Predictive recovery modeling
• Strategy effectiveness analysis
• Agent performance tracking
• Automated reporting and insights
• Scenario modeling for strategy planning`,
      image: "/data-analytics.jpg"
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance & Security",
      description: "Maintain adherence to financial regulations with audit trails, encrypted data, and secure transactions.",
      content: `Stay compliant with ever-changing financial regulations without additional effort. The platform automatically applies regional compliance rules to collection activities, maintains detailed audit logs, and secures all data with enterprise-grade encryption. Built-in consent management ensures all customer interactions follow legal guidelines.

Financial institutions face increasingly complex regulatory requirements. Xelend's compliance framework automatically enforces regional regulations and industry best practices throughout the collection process. The platform maintains comprehensive audit trails and secures sensitive data with enterprise-grade security.

Key capabilities include:
• Region-specific compliance rule engines
• Complete audit logs of all collection activities
• Role-based access controls
• Enterprise-grade data encryption
• Consent management for all communications
• Regular compliance updates`,
      image: "/regulatory-compliance.jpg"
    }
  ];
  
  const feature = features.find(f => f.id === id);
  
  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
          <Button onClick={() => navigate("/")}>
            Return to Home
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Features
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                {feature.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                {feature.description}
              </p>
              
              <div className="prose prose-blue max-w-none">
                {feature.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('• ')) {
                    // Handle bullet points
                    const items = paragraph.split('\n• ');
                    return (
                      <ul key={idx} className="my-4 space-y-2">
                        {items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start">
                            <span className="text-slate-700">{item.replace('• ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.includes('Key capabilities include:')) {
                    // Handle section title
                    return (
                      <h3 key={idx} className="text-xl font-semibold mt-8 mb-4">
                        {paragraph}
                      </h3>
                    );
                  } else {
                    // Regular paragraph
                    return (
                      <p key={idx} className="mb-4 text-slate-700">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button className="px-6">
                  Request a Demo
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="sticky top-20">
                <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeatureDetail;
