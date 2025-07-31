import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Globe } from "lucide-react";

const founders = [
  {
    name: "Mr. John",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "30+ years in agricultural export with a passion for sharing Malaysia's finest durians globally.",
  },
  {
    name: "Mrs. Smith",
    role: "Co-Founder & COO",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Expert in international food safety standards and quality assurance.",
  },
];

const team = [
  {
    name: "Dr. Lim Wei Ming",
    role: "Head of Quality Control",
    image:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    expertise: "Food Science & Technology",
  },
  {
    name: "Maria Santos",
    role: "International Sales Director",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    expertise: "Global Market Development",
  },
];

const exportCountries = [
  "Singapore",
  "China",
  "Hong Kong",
  "Taiwan",
  "Japan",
  "South Korea",
  "Thailand",
  "Vietnam",
  "Indonesia",
  "Australia",
  "Canada",
  "USA",
  "United Kingdom",
  "Germany",
  "France",
];

const mediaArticles = [
  {
    title: "Duria Named Top Durian Exporter 2024",
    publication: "Asian Food & Agriculture Magazine",
    date: "March 2024",
    image:
      "https://cdn.sinchew.com.my/wp-content/uploads/2024/06/e585a8efbc9ae4b8ade59bbde4b88ee5a4a7e9a9ace7adbee8aeaee5ae9ae4b9a6efbc8ce6a6b4e6a2bfe4b89ae88085e5b88ce69c9be5869ce7b2aee983a8e5b0bd-1.jpg",
  },
  {
    title: "Premium Malaysian Durians Reach Global Markets",
    publication: "International Trade Weekly",
    date: "February 2024",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
  },
];

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Duria</h1>
            <p className="text-xl leading-relaxed mb-8">
              Founded with a mission to share Malaysia's finest durians with the
              world, Duria has become the premier exporter of premium durian
              varieties, bringing authentic taste and quality to global markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary text-yellow-100 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                ISO 22000 Certified
              </Badge>
              <Badge className="bg-primary text-yellow-100 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                15+ Countries
              </Badge>
              <Badge className="bg-primary text-yellow-100 px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                50+ Team Members
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Founders
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {founders.map((founder) => (
                <Card
                  key={founder.name}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full md:w-48 h-64 md:h-48 object-cover"
                    />
                    <CardContent className="p-6 flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {founder.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {founder.role}
                      </p>
                      <p className="text-muted-foreground">{founder.bio}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior Management */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Senior Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="text-center">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">{member.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media & Press */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Media & Press
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mediaArticles.map((article) => (
                <Card key={article.title} className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {article.publication}
                    </p>
                    <p className="text-muted-foreground">{article.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exporting Countries */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Global Reach</h2>
            <p className="text-xl mb-12 opacity-90">
              We proudly export to these countries, bringing authentic Malaysian
              durian flavors worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {exportCountries.map((country) => (
                <div
                  key={country}
                  className="flex items-center space-x-2 bg-primary-foreground/10 rounded-lg p-3 text-yellow-100"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
