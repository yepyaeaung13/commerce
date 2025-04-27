"use client"

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Banners = {
  id: number;
  imageUrl: string;
};

const banners: Banners[] = [
  {
    id: 1,
    imageUrl: "/banner/banner1.jpg",
  },
  {
    id: 2,
    imageUrl: "/banner/banner2.jpg",
  },
  {
    id: 3,
    imageUrl: "/banner/banner3.jpg",
  },
]

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Image src={banner.imageUrl} width={1140} height={400} className="h-96 rounded-xl" alt="banner" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${
              index === current - 1 ? "bg-primary-color" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
