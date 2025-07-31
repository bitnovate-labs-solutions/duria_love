import { useParams } from "react-router-dom";
import { ProductCard } from "@/components/ui/product-card";

interface Product {
  id: string;
  title: string;
  image: string;
  price?: string;
  description: string;
  category: string;
  rating?: number;
  inStock?: boolean;
  isNew?: boolean;
}

const categoryProducts: Record<string, Product[]> = {
  "whole-fruits": [
    {
      id: "musang-king-whole",
      title: "Premium Musang King",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80",
      price: "$89.99/kg",
      description: "The crown jewel of durians with rich, creamy texture.",
      category: "Whole Fruits",
      rating: 5,
      inStock: true,
      isNew: true,
    },
    {
      id: "d24-whole",
      title: "D24 Sultan",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce6862f44a7?auto=format&fit=crop&w=600&q=80",
      price: "$65.99/kg",
      description: "Sweet and creamy with a hint of bitterness.",
      category: "Whole Fruits",
      rating: 5,
      inStock: true,
    },
  ],
  pulps: [
    {
      id: "musang-king-pulp",
      title: "Musang King Pulp",
      image:
        "https://images.unsplash.com/photo-1497604401993-f2e92255cb0a?auto=format&fit=crop&w=600&q=80",
      price: "$45.99/pack",
      description: "Ready-to-eat premium pulp.",
      category: "Pulps",
      rating: 5,
      inStock: true,
    },
  ],
};

const categoryTitles: Record<string, string> = {
  "whole-fruits": "Whole Fruits",
  pulps: "Durian Pulps",
  consumables: "Consumables",
  festive: "Festive & Gifting",
};

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const products = categoryProducts[categoryId || ""] || [];
  const title = categoryTitles[categoryId || ""] || "Products";

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl">
              Discover our premium selection in this category.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Products in this category are coming soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
