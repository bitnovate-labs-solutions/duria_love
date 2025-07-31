import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Shield, Truck, Award } from "lucide-react";

interface ProductDetail {
  title: string;
  images: string[];
  price: string;
  description: string;
  category: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  nutritionalInfo: {
    calories: string;
    carbs: string;
    fiber: string;
    protein: string;
    fat: string;
  };
  benefits: string[];
  packaging: string;
  origin: string;
  certifications: string[];
}

const productDetails: Record<string, ProductDetail> = {
  "musang-king-whole": {
    title: "Premium Musang King",
    images: [
      "https://images.unsplash.com/photo-1562486683-67d4d5886f99?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.says.com/2025/03/E1fm537N-65a0.jpg",
    ],
    price: "RM 389.99/kg",
    description:
      "The crown jewel of durians, Musang King is renowned for its rich, creamy texture and complex flavor profile that balances sweetness with a hint of bitterness.",
    category: "Whole Fruits",
    rating: 5,
    inStock: true,
    isNew: true,
    nutritionalInfo: {
      calories: "147 per 100g",
      carbs: "27.1g",
      fiber: "3.8g",
      protein: "1.5g",
      fat: "5.3g",
    },
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Good source of potassium and dietary fiber",
      "Contains healthy monounsaturated fats",
      "Natural energy booster",
    ],
    packaging: "1kg, 2kg, 5kg vacuum-sealed packages available",
    origin: "Pahang, Malaysia - Premium orchards",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
  "d24-whole": {
    title: "D24 Sultan",
    images: [
      "https://topduriandelivery.com/wp-content/uploads/2021/07/Musang-King-D197-2-musang-king-d-24-tip-top-durian-delivery.jpg",
      "https://topduriandelivery.com/wp-content/uploads/2021/07/Musang-King-D197-2-musang-king-d-24-tip-top-durian-delivery.jpg",
    ],
    price: "RM 285.99/kg",
    description:
      "Sweet and creamy with a hint of bitterness, perfect for durian enthusiasts. D24 Sultan is known for its distinctive golden-yellow flesh and rich, complex flavor.",
    category: "Whole Fruits",
    rating: 5,
    inStock: true,
    nutritionalInfo: {
      calories: "147 per 100g",
      carbs: "27.1g",
      fiber: "3.8g",
      protein: "1.5g",
      fat: "5.3g",
    },
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Good source of potassium and dietary fiber",
      "Contains healthy monounsaturated fats",
      "Natural energy booster",
    ],
    packaging: "1kg, 2kg, 5kg vacuum-sealed packages available",
    origin: "Johor, Malaysia - Premium orchards",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
  "tekka-whole": {
    title: "Tekka Premium",
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    ],
    price: "RM 242.99/kg",
    description:
      "Distinctive orange flesh with sweet, custard-like consistency. Tekka Premium offers a unique flavor profile that's both sweet and slightly nutty.",
    category: "Whole Fruits",
    rating: 4,
    inStock: true,
    nutritionalInfo: {
      calories: "147 per 100g",
      carbs: "27.1g",
      fiber: "3.8g",
      protein: "1.5g",
      fat: "5.3g",
    },
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Good source of potassium and dietary fiber",
      "Contains healthy monounsaturated fats",
      "Natural energy booster",
    ],
    packaging: "1kg, 2kg, 5kg vacuum-sealed packages available",
    origin: "Pahang, Malaysia - Premium orchards",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
  "musang-king-pulp": {
    title: "Musang King Pulp",
    images: [
      "https://sb-assets.sgp1.cdn.digitaloceanspaces.com/product/main_image/34528/92c1c83c-7850-4fbc-86ca-cc020b504b47.jfif",
      "https://sb-assets.sgp1.cdn.digitaloceanspaces.com/product/main_image/34528/92c1c83c-7850-4fbc-86ca-cc020b504b47.jfif",
    ],
    price: "RM 199.99/pack",
    description:
      "Ready-to-eat premium pulp, perfect for desserts and direct consumption. This convenient format preserves all the rich flavors of Musang King.",
    category: "Pulps",
    rating: 5,
    inStock: true,
    nutritionalInfo: {
      calories: "147 per 100g",
      carbs: "27.1g",
      fiber: "3.8g",
      protein: "1.5g",
      fat: "5.3g",
    },
    benefits: [
      "Rich in Vitamin C and antioxidants",
      "Good source of potassium and dietary fiber",
      "Contains healthy monounsaturated fats",
      "Natural energy booster",
    ],
    packaging: "250g, 500g, 1kg vacuum-sealed packages",
    origin: "Pahang, Malaysia - Premium orchards",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
  "durian-ice-cream": {
    title: "Artisan Durian Ice Cream",
    images: [
      "https://www.thespruceeats.com/thmb/xelwSSdQ-Wt0GV_3B98g3ZGE5vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/durian-ice-cream-694424-7937ac06874346fdb6482f87946f364b.jpg",
      "https://images.unsplash.com/photo-1653565922895-4c08e12ea9f5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: "RM 56.99/pint",
    description:
      "Creamy premium ice cream made with authentic Musang King durian. A perfect blend of traditional durian flavor and modern ice cream craftsmanship.",
    category: "Consumables",
    rating: 5,
    inStock: true,
    isNew: true,
    nutritionalInfo: {
      calories: "280 per 100g",
      carbs: "25g",
      fiber: "2g",
      protein: "4g",
      fat: "18g",
    },
    benefits: [
      "Made with real durian pulp",
      "No artificial flavors or colors",
      "Rich and creamy texture",
      "Perfect for durian lovers",
    ],
    packaging: "473ml (1 pint) containers",
    origin: "Malaysia - Artisan ice cream production",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
  "durian-mochi": {
    title: "Durian Mochi Box",
    images: [
      "https://duria.com.my/wp-content/uploads/2020/04/Durian-Mochi-Front-Box.jpg",
      "https://images.unsplash.com/photo-1653565922895-4c08e12ea9f5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    price: "RM 108.99/box",
    description:
      "Traditional Japanese mochi filled with premium durian paste. A perfect fusion of Japanese tradition and Malaysian durian excellence.",
    category: "Consumables",
    rating: 4,
    inStock: false,
    nutritionalInfo: {
      calories: "120 per piece",
      carbs: "22g",
      fiber: "1g",
      protein: "2g",
      fat: "3g",
    },
    benefits: [
      "Traditional mochi texture",
      "Premium durian filling",
      "Perfect bite-sized treats",
      "Great for gifting",
    ],
    packaging: "12 pieces per box",
    origin: "Malaysia - Artisan mochi production",
    certifications: ["Halal Certified", "HACCP", "ISO 22000"],
  },
};

const ProductDetail = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId } = useParams<{ productId: string }>();
  const product = productDetails[productId || ""];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className={`aspect-square overflow-hidden rounded-lg border cursor-pointer transition-all ${
                    selectedImageIndex === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary text-primary-foreground">
                  {product.category}
                </Badge>
                {product.isNew && <Badge variant="secondary">New</Badge>}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? "text-primary fill-current"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="text-muted-foreground">(4.8 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-4">
                {product.price}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary-glow"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  Quality guaranteed
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Origin:</span> {product.origin}
                </div>
                <div>
                  <span className="font-medium">Packaging:</span>{" "}
                  {product.packaging}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert: string) => (
                  <Badge
                    key={cert}
                    variant="outline"
                    className="flex items-center gap-1"
                  >
                    <Award className="h-3 w-3" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nutritional Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Nutritional Information
              </h3>
              <div className="space-y-2">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize font-medium">{key}:</span>
                    <span>{value as string}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Benefits */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Health Benefits</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
