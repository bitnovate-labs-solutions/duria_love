import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const products = [
  {
    id: "musang-king-whole",
    title: "Premium Musang King",
    image: "https://media.says.com/2025/03/E1fm537N-65a0.jpg",
    price: "RM 389.99/kg",
    description:
      "The crown jewel of durians with rich, creamy texture and complex flavor profile.",
    category: "Whole Fruits",
    rating: 5,
    inStock: true,
    isNew: true,
  },
  {
    id: "d24-whole",
    title: "D24 Sultan",
    image:
      "https://topduriandelivery.com/wp-content/uploads/2021/07/Musang-King-D197-2-musang-king-d-24-tip-top-durian-delivery.jpg",
    price: "RM 285.99/kg",
    description:
      "Sweet and creamy with a hint of bitterness, perfect for durian enthusiasts.",
    category: "Whole Fruits",
    rating: 5,
    inStock: true,
  },
  {
    id: "tekka-whole",
    title: "Tekka Premium",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    price: "RM 242.99/kg",
    description:
      "Distinctive orange flesh with sweet, custard-like consistency.",
    category: "Whole Fruits",
    rating: 4,
    inStock: true,
  },
  {
    id: "musang-king-pulp",
    title: "Musang King Pulp",
    image:
      "https://sb-assets.sgp1.cdn.digitaloceanspaces.com/product/main_image/34528/92c1c83c-7850-4fbc-86ca-cc020b504b47.jfif",
    price: "RM 199.99/pack",
    description:
      "Ready-to-eat premium pulp, perfect for desserts and direct consumption.",
    category: "Pulps",
    rating: 5,
    inStock: true,
  },
  {
    id: "durian-ice-cream",
    title: "Artisan Durian Ice Cream",
    image:
      "https://www.thespruceeats.com/thmb/xelwSSdQ-Wt0GV_3B98g3ZGE5vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/durian-ice-cream-694424-7937ac06874346fdb6482f87946f364b.jpg",
    price: "RM 56.99/pint",
    description:
      "Creamy premium ice cream made with authentic Musang King durian.",
    category: "Consumables",
    rating: 5,
    inStock: true,
    isNew: true,
  },
  {
    id: "durian-mochi",
    title: "Durian Mochi Box",
    image:
      "https://duria.com.my/wp-content/uploads/2020/04/Durian-Mochi-Front-Box.jpg",
    price: "RM 108.99/box",
    description: "Traditional Japanese mochi filled with premium durian paste.",
    category: "Consumables",
    rating: 4,
    inStock: false,
  },
];

const categories = ["All", "Whole Fruits", "Pulps", "Consumables", "Festive"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Premium Durian Collection
            </h1>
            <p className="text-xl leading-relaxed">
              Discover our carefully curated selection of the finest durian
              varieties and products, from fresh whole fruits to innovative
              consumables.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Product Education Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Durian Varieties Guide</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about the unique characteristics of each durian variety in
              our collection.
            </p>
            <Button size="lg" variant="outline">
              Coming Soon - Educational Content
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
