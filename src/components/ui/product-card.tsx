import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
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

export const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
  category,
  rating = 5,
  inStock = true,
  isNew = false,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 overflow-hidden border-0 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">New</Badge>
          )}
          {!inStock && <Badge variant="destructive">Out of Stock</Badge>}
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-background/90 text-foreground"
          >
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-primary fill-current"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          {price && (
            <div className="text-lg font-bold text-primary">{price}</div>
          )}
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/shop/product/${id}`}>View Details</Link>
            </Button>
            {inStock && (
              <Button size="sm" className="bg-primary hover:bg-primary-glow">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
