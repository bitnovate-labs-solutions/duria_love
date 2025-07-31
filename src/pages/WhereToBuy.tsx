import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Globe, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resellers = [
  {
    name: "Premium Asian Markets",
    logo: "https://images.unsplash.com/photo-1486312338219-ce6862f44a7?auto=format&fit=crop&w=200&q=80",
    location: "Singapore",
    phone: "+65 6234 5678",
    website: "www.premiumasian.sg",
    address: "123 Orchard Road, Singapore 238873",
  },
  {
    name: "Golden Dragon Imports",
    logo: "https://images.unsplash.com/photo-1497604401993-f2e92255cb0a?auto=format&fit=crop&w=200&q=80",
    location: "Hong Kong",
    phone: "+852 2345 6789",
    website: "www.goldendragon.hk",
    address: "456 Nathan Road, Tsim Sha Tsui, Hong Kong",
  },
  {
    name: "Sakura Fresh Foods",
    logo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=200&q=80",
    location: "Tokyo, Japan",
    phone: "+81 3 1234 5678",
    website: "www.sakurafresh.jp",
    address: "789 Shibuya-ku, Tokyo 150-0002, Japan",
  },
  {
    name: "Australia Exotic Fruits",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=80",
    location: "Sydney, Australia",
    phone: "+61 2 9876 5432",
    website: "www.exoticfruits.com.au",
    address: "321 George Street, Sydney NSW 2000, Australia",
  },
];

const WhereToBuy = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    partySize: "",
    date: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description:
        "We'll get back to you within 24 hours about your durian party.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      partySize: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Where to Buy
            </h1>
            <p className="text-xl leading-relaxed">
              Find Duria premium products at these trusted retailers
              worldwide, or inquire about hosting your own durian tasting party.
            </p>
          </div>
        </div>
      </section>

      {/* Resellers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Trusted Retailers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resellers.map((reseller) => (
                <Card
                  key={reseller.name}
                  className="hover:shadow-card transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={reseller.logo}
                        alt={reseller.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {reseller.name}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{reseller.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{reseller.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4" />
                            <a
                              href={`https://${reseller.website}`}
                              className="text-primary hover:underline"
                            >
                              {reseller.website}
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                          {reseller.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Find Retailers Near You
            </h2>
            <div className="bg-background rounded-lg p-8 text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-muted-foreground">
                We're working on an interactive map to help you find the nearest
                Duria retailer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Durian Party Inquiry */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Host a Durian Tasting Party
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the ultimate durian adventure with friends and
                family. We'll help you organize an unforgettable tasting
                experience.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="partySize">Party Size</Label>
                      <Input
                        id="partySize"
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleInputChange}
                        placeholder="e.g., 8-10 people"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your preferences, dietary restrictions, or special requests..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereToBuy;
