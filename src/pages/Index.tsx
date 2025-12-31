import { SignupForm } from "@/components/SignupForm";
import { Bike, Users, TreePine, ArrowRight, Heart } from "lucide-react";
import heroBike from "@/assets/hero-bike.png";
import cargoBikeIllustration from "@/assets/cargo-bike-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative color bar */}
        <div className="flex h-2">
          <div className="flex-1 bg-brand-blue" />
          <div className="flex-1 bg-brand-purple" />
          <div className="flex-1 bg-brand-red" />
          <div className="flex-1 bg-brand-orange" />
          <div className="flex-1 bg-brand-yellow" />
          <div className="flex-1 bg-brand-green" />
          <div className="flex-1 bg-brand-lime" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/20 text-foreground px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="font-medium text-sm">Coming Soon to Brooklyn</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              The Brooklyn
              <span className="block text-brand-blue">Bicycle Library</span>
            </h1>

            {/* Mission statement */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Try an electric cargo bike. See how life without a car could work for your family.
            </p>

            {/* CTA arrow */}
            <a
              href="#signup"
              className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-red font-semibold text-lg transition-colors"
            >
              Join the waitlist
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-5xl mx-auto">
            <img
              src={heroBike}
              alt="A mother riding a cargo bike with two children through Brooklyn with NYC skyline in the background"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Value Props */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 mb-4">
                <Bike className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Borrow, Don't Buy</h3>
              <p className="text-muted-foreground">
                Try an electric cargo bike for a week before making a commitment. No purchase necessary.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 mb-4">
                <Users className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Built for Families</h3>
              <p className="text-muted-foreground">
                Our cargo bikes carry kids, groceries, and gear. School runs, park trips, weekend adventures.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 mb-4">
                <TreePine className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Safer, Greener Streets</h3>
              <p className="text-muted-foreground">
                Every bike trip is one less car. Help make Brooklyn safer for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Sign up for the waitlist",
                  description: "Join our early access list to be first in line when we launch.",
                  color: "bg-brand-blue",
                },
                {
                  step: "2",
                  title: "Choose your bike",
                  description: "We'll match you with the right cargo bike for your family's needs.",
                  color: "bg-brand-purple",
                },
                {
                  step: "3",
                  title: "Borrow for a week",
                  description: "Take it on your daily routes. School drop-off, grocery runs, everywhere.",
                  color: "bg-brand-orange",
                },
                {
                  step: "4",
                  title: "Return and share",
                  description: "Bring it back so another family can try. Tell us what you learned!",
                  color: "bg-brand-green",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${item.color} text-white font-display font-bold flex items-center justify-center`}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Be the First to Know
              </h2>
              <p className="text-background/70 text-lg">
                Sign up for updates on our launch and occasional newsletter.
              </p>
            </div>

            <div className="bg-background text-foreground rounded-2xl p-6 md:p-8 shadow-2xl">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          {/* Cargo bike illustration */}
          <div className="flex justify-center mb-8">
            <img
              src={cargoBikeIllustration}
              alt="Illustration of a family on a cargo bike"
              className="h-24 md:h-32 w-auto opacity-90"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-4 h-4 text-brand-red" />
              <span>Made with love in Brooklyn, NY</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Brooklyn Bicycle Library
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
