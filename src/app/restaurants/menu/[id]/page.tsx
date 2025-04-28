import React from "react";
import { Menu } from "@/interfaces/Menu";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  params: {
    id: string;
  };
}

const MenuPage = async ({ params: { id } }: Props) => {
    const res = await fetch(`http://byteats.local/api/menu-items/restaurant/${id}`);
    if (!res.ok) throw new Error("Failed to fetch data");
    const menu: Menu = await res.json();
  
    // Group items by category
    const itemsByCategory = menu.items.reduce((acc, item) => {
      const category = item.category || 'Uncategorized';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as Record<string, typeof menu.items>);
  
    return (
      <div className="space-y-12">
        {Object.entries(itemsByCategory).map(([category, items]) => (
          <section key={category} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">{category}</h2>
            <Carousel
              opts={{ align: "start" }}
              className="w-full max-w-6xl"
            >
              <CarouselContent>
                {items.map((item) => (
                  <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
                      <div className="relative h-[220px] w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        <p className="text-primary text-xl font-bold mt-2">${item.price}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        ))}
      </div>
    );
  };
  

export default MenuPage;
