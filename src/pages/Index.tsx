import { Hero } from "@/components/sections/Hero";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { Newsletter } from "@/components/sections/Newsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Globe, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose Duria?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our premium quality, global
                reach, and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Hand-selected from Malaysia's finest orchards, ensuring
                    exceptional taste and freshness.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground text-sm">
                    Exporting to 15+ countries with specialized cold-chain
                    logistics worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Certified Excellence
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    ISO 22000, HACCP certified with full Halal compliance and
                    traceability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground text-sm">
                    30+ years of experience in durian cultivation and
                    international export.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ProductCategories />

      {/* About Preview Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                From Malaysia's Heart to Your Table
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a passion for sharing Malaysia's finest durians
                globally, Duria has become the premier choice for discerning
                customers who appreciate authentic taste and uncompromising
                quality.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Sustainable farming practices
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Direct relationships with premium orchards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">
                    Temperature-controlled logistics
                  </span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="/about">Learn Our Story</a>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce6862f44a7?auto=format&fit=crop&w=600&q=80"
                alt="Our team and facilities"
                className="rounded-lg shadow-premium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Index;
