import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "whole-fruits",
    title: "Whole Fruits",
    description: "Fresh, premium durians in their natural form",
    image:
      "https://images.unsplash.com/photo-1648299732724-b480cbb65548?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: 12,
  },
  {
    id: "pulps",
    title: "Durian Pulps",
    description: "Ready-to-eat premium durian flesh",
    image:
      "https://tenggarafood.com/wp-content/uploads/2024/07/durian-1024x649.jpg",
    products: 8,
  },
  {
    id: "consumables",
    title: "Consumables",
    description: "Ice cream, mochi, cakes and more",
    image:
      "https://images.unsplash.com/photo-1653565922895-4c08e12ea9f5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    products: 15,
  },
  {
    id: "festive",
    title: "Festive & Gifting",
    description: "Mooncakes and premium gift sets",
    image:
      "https://topduriandelivery.com/wp-content/uploads/2021/07/5a9faef6-63ba-4430-af8f-3468bf058290-500x500.jpg",
    products: 6,
  },
];

export const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fresh whole durians to innovative consumables, discover our
            complete range of premium durian products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-card transition-all duration-300 overflow-hidden border-0 bg-card"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                  {category.products} products
                </div>
              </div>
              <CardContent className="p-6 flex flex-col min-h-[200px]">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-primary text-yellow-50 hover:bg-primary/90 transition-colors"
                  >
                    <Link to={`/shop/${category.id}`}>
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="text-yellow-50">
            <Link to="/shop">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
