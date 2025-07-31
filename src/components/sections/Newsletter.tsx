import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Stay Fresh with Duria
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Get the latest updates on new arrivals, seasonal varieties,
              recipes, and exclusive offers delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background/30"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
