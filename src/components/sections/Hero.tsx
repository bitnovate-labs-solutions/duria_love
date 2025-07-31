import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const heroImage =
  "https://images.unsplash.com/photo-1718942899770-25f5802a9a8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium durian selection"
          className="w-full h-full object-cover object-center"
          style={{
            imageRendering: "crisp-edges",
            filter: "contrast(1.1) brightness(1.05) saturate(1.1)",
            transform: "scale(1.02)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/20 backdrop-blur-sm rounded-full px-6 py-2 border border-background/30">
            <Star className="h-4 w-4 text-primary-glow fill-current" />
            <span className="text-sm font-medium text-background">
              Premium Malaysian Durians
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-background leading-tight">
            The World's Finest
            <span className="block text-primary-glow">Durian Experience</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-background/90 max-w-2xl mx-auto leading-relaxed">
            From Malaysia's premium orchards to your table. Experience the rich,
            complex flavors of authentic Musang King, D24, and exclusive
            varieties.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-primary text-yellow-50 hover:bg-primary-glow shadow-premium text-lg px-8 py-6 h-auto"
            >
              <Link to="/shop">
                Explore Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsVideoOpen(true)}
              className="bg-background/10 text-background border-background/30 hover:bg-background/20 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            >
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">15+</div>
              <div className="text-sm text-background/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">100%</div>
              <div className="text-sm text-background/80">Premium Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow">24/7</div>
              <div className="text-sm text-background/80">Fresh Export</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-glow rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="text-white text-xl font-semibold">
              Our Story
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/B-ouf-qApPo?si=NIAEh9l2XhKacHXe&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
