import { useParams } from "react-router-dom";
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
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce6862f44a7?auto=format&fit=crop&w=800&q=80",
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
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productDetails[productId || ""];

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
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg border"
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
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
