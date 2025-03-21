
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 font-display">Xelend</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-indigo-500 to-blue-500 p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Xelend Platform
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              A comprehensive extension for financial institutions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem to="/features/collection-management" title="Collections Management">
                        End-to-end collections lifecycle management
                      </ListItem>
                      <ListItem to="/loan-origination" title="Loan Origination">
                        <span className="flex items-center gap-2">
                          Streamlined lending process
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                            Coming Soon
                          </span>
                        </span>
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <ListItem to="/features/task-allocation" title="Task Allocation">
                        Intelligent field assignments and route planning
                      </ListItem>
                      <ListItem to="/features/customer-insights" title="Customer Insights">
                        360° view of payment history and interactions
                      </ListItem>
                      <ListItem to="/features/automated-followups" title="Automated Follow-Ups">
                        Multi-channel communication and digital payments
                      </ListItem>
                      <ListItem to="/features/operational-integration" title="Operational Integration">
                        Seamless integration with existing systems
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                      <ListItem to="#" title="Case Studies">
                        See how our clients achieve success
                      </ListItem>
                      <ListItem to="#" title="Whitepapers">
                        In-depth research and industry insights
                      </ListItem>
                      <ListItem to="#" title="Blog">
                        Latest news and product updates
                      </ListItem>
                      <ListItem to="#" title="Documentation">
                        Technical guides and API reference
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* Fixed the About link to not use Next.js-specific props */}
                  <NavigationMenuLink asChild>
                    <Link 
                      to="#" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild>
              <Link to="#">
                Request Demo
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 bg-white/95 backdrop-blur-md shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Home
            </Link>
            <Link to="/features/collection-management" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Collections Management
            </Link>
            <Link to="/loan-origination" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Loan Origination
              <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </Link>
            <Link to="/features/task-allocation" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Task Allocation
            </Link>
            <Link to="/features/customer-insights" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Customer Insights
            </Link>
            <Link to="#" className="px-3 py-2 rounded-md hover:bg-slate-100">
              About Us
            </Link>
            <Button className="mt-2">
              <Link to="#">Request Demo</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Helper component for navigation menu items
const ListItem = ({
  className,
  title,
  children,
  to,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Navbar;
