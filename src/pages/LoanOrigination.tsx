
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedGradient from "@/components/AnimatedGradient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LoanOrigination = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-block mb-8">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                Loan Origination System
              </h1>
              <div className="inline-block mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-xl text-slate-600 mb-8">
                Our next-generation loan origination system will streamline the entire lending process, 
                from application to approval, with advanced analytics and automated decisioning.
              </p>
              
              <div className="prose prose-blue max-w-none">
                <p className="text-slate-700">
                  Xelend's upcoming Loan Origination System will transform how financial institutions manage 
                  their lending operations. The platform will feature intelligent application processing, 
                  automated credit scoring, and real-time risk assessment tools.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Key features will include:
                </h3>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-slate-700">Intelligent application processing with minimal manual intervention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700">Automated credit decisioning with customizable rule engines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700">Seamless integration with core banking systems and credit bureaus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700">Digital document collection and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700">End-to-end workflow management with status tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-700">Advanced analytics for portfolio insights and performance</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <Button className="px-6">
                  Join the Waitlist
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="/loan-origination.jpg" 
                  alt="Loan Origination System"
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoanOrigination;
