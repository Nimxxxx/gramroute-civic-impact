import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Camera, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">GramRoute</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="#about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="#how-it-works" className="text-muted-foreground hover:text-foreground">How It Works</Link>
            <Link to="#impact" className="text-muted-foreground hover:text-foreground">Impact</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="nav" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-card leading-tight">
              Travel. Report. <span className="text-accent">Transform.</span>
            </h1>
            <p className="text-xl text-card/90 leading-relaxed">
              Empower students to report civic issues and transform communities through smart reporting and gamified civic engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">Start Reporting</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-card/30 text-card hover:bg-card/10" asChild>
                <Link to="/impact">View Impact</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5K+</div>
                <div className="text-card/80">Reports</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2K+</div>
                <div className="text-card/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">80%</div>
                <div className="text-card/80">Resolved</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Students reporting civic issues" 
              className="rounded-2xl shadow-medium animate-float"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-button">
              <Camera className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How GramRoute Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to make a real impact</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 hover:shadow-medium transition-all bg-gradient-card">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Notice & Capture</h3>
              <p className="text-muted-foreground">Spot a civic issue? Capture it with our smart reporting tool that auto-detects location and categorizes problems.</p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-medium transition-all bg-gradient-card">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Report & Route</h3>
              <p className="text-muted-foreground">Your report is automatically routed to the right local authority through our smart routing engine.</p>
            </Card>
            <Card className="p-8 text-center space-y-4 hover:shadow-medium transition-all bg-gradient-card">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Track & Transform</h3>
              <p className="text-muted-foreground">Earn civic points, badges, and recognition while tracking your impact on community transformation.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-card mb-6">Ready to Transform Your Community?</h2>
          <p className="text-xl text-card/90 mb-8">Join thousands of students making a real difference</p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-murky-teal text-card py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-xl font-bold">GramRoute</span>
            </div>
            <p className="text-card/80">Empowering civic engagement through technology</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2 text-card/80">
              <div>How It Works</div>
              <div>Features</div>
              <div>Pricing</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-card/80">
              <div>Help Center</div>
              <div>Contact Us</div>
              <div>FAQ</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2 text-card/80">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;