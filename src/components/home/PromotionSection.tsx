"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
} from "react-share";
import IconClock from "../icons/IconClock";
import IconStar from "../icons/IconStar";
import IconCart from "../icons/IconCart";
import IconHeart from "../icons/IconHeart";

// Dynamically import Countdown to avoid hydration issues
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

type Category = {
  id: number;
  name: string;
};

type Rate = {
  id: number;
  rate: number;
  reviewCount: number;
};

type Promotion = {
  id: number;
  percent: number;
  expiredDate: Date;
};

type ProductImage = {
  id: number;
  imageUrl: string;
};

export type Product = {
  id: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  qty: number;
  isWishList: boolean;
  shareUrl: string;
  image: ProductImage[];
  category: Category;
  rate: Rate;
  promotion: Promotion;
};

const products: Product[] = [
  {
    id: 1,
    sku: "VEG-001",
    name: "Fresh Broccoli",
    description: "Crisp and green broccoli, perfect for steaming or stir-fry.",
    price: 2.99,
    qty: 50,
    isWishList: false,
    shareUrl: "https://www.ecommerce.com/product/1",
    image: [
      {
        id: 1,
        imageUrl: "/category/category1.png",
      },
      {
        id: 2,
        imageUrl: "/category/category1.png",
      },
      {
        id: 3,
        imageUrl: "/category/category1.png",
      },
      {
        id: 4,
        imageUrl: "/category/category1.png",
      },
    ],
    category: {
      id: 1,
      name: "Vegetable",
    },
    rate: {
      id: 1,
      rate: 4.5,
      reviewCount: 10,
    },
    promotion: {
      id: 1,
      percent: 10,
      expiredDate: new Date("2025-04-31"),
    },
  },
  {
    id: 2,
    sku: "FRT-001",
    name: "Red Apple",
    description: "Sweet and juicy red apples, perfect for snacking.",
    price: 1.5,
    qty: 100,
    isWishList: true,
    shareUrl: "https://www.ecommerce.com/product/2",
    image: [
      {
        id: 1,
        imageUrl: "/category/category2.png",
      },
      {
        id: 2,
        imageUrl: "/category/category2.png",
      },
      {
        id: 3,
        imageUrl: "/category/category2.png",
      },
      {
        id: 4,
        imageUrl: "/category/category2.png",
      },
    ],
    category: {
      id: 2,
      name: "Fruit",
    },
    rate: {
      id: 2,
      rate: 4.8,
      reviewCount: 15,
    },
    promotion: {
      id: 2,
      percent: 5,
      expiredDate: new Date("2025-05-07"),
    },
  },
  {
    id: 3,
    sku: "MEAT-001",
    name: "Chicken Breast",
    description:
      "Lean and tender chicken breast, ideal for grilling or baking.",
    price: 5.99,
    qty: 30,
    isWishList: false,
    shareUrl: "https://www.ecommerce.com/product/3",
    image: [
      {
        id: 1,
        imageUrl: "/category/category3.png",
      },
      {
        id: 2,
        imageUrl: "/category/category3.png",
      },
      {
        id: 3,
        imageUrl: "/category/category3.png",
      },
    ],
    category: {
      id: 3,
      name: "Meat",
    },
    rate: {
      id: 3,
      rate: 4.2,
      reviewCount: 20,
    },
    promotion: {
      id: 3,
      percent: 15,
      expiredDate: new Date("2025-05-14"),
    },
  },
];

function PromotionSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <section className="mt-16 bg-white h-[600px] rounded-xl">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="flex gap-10 px-10 mt-16">
                <div className="w-1/2 flex flex-col items-center px-5">
                  <div className="w-5/6 relative z-20 bg-secondary-color p-10 rounded-xl">
                    <Image
                      src={product.image[0].imageUrl}
                      alt="product-photo"
                      width={240}
                      height={240}
                      className="w-full h-72"
                    />
                    <p className="absolute -top-5 -left-5 z-50 text-white font-bold bg-red-500 w-14 h-14 rounded-full flex justify-center items-center">
                      <span className="text-2xl">
                        {product.promotion.percent}
                      </span>
                      %
                    </p>
                  </div>
                  <div className="mt-5 w-5/6 flex gap-5 overflow-hidden">
                    {product.image.map((image) => (
                      <Image
                        key={image.id}
                        src={image.imageUrl}
                        alt="product photo"
                        width={60}
                        height={60}
                        className="w-20 h-20 rounded-md bg-secondary-color shadow-md cursor-pointer active:scale-95 duration-200"
                      />
                    ))}
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="w-5/6 px-5 space-y-5">
                    <div className="flex items-center gap-2">
                      <IconClock />
                      {isMounted && (
                        <Countdown
                          date={product.promotion.expiredDate}
                          renderer={({
                            days,
                            hours,
                            minutes,
                            seconds,
                          }: {
                            days: number;
                            hours: number;
                            minutes: number;
                            seconds: number;
                          }) => (
                            <span className="text-red-500 [word-spacing:10px] text-lg font-semibold">
                              {days}d {hours}h {minutes}m {seconds}s
                            </span>
                          )}
                        />
                      )}
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-xs font-semibold text-gray-500">
                        {product.category.name}
                      </h2>
                      <h1 className="text-2xl font-semibold text-primary-color">
                        {product.name}
                      </h1>
                      <p className="text-xs font-semibold text-primary-color flex items-end gap-1">
                        <IconStar />
                        {product.rate.rate} Rating
                        <span className="text-xs text-gray-500 underline cursor-pointer">
                          ({product.rate.reviewCount} reviews)
                        </span>
                      </p>

                      {/* price  */}
                      <p className="mt-5 text-2xl font-semibold text-primary-color">
                        ${product.price}
                      </p>
                    </div>

                    <div className="mt-12 flex gap-2 text-xs font-semibold">
                      <Button className="w-1/2 bg-secondary-color text-primary-color px-4 py-2 rounded-xl hover:bg-secondary-color cursor-pointer active:scale-95 transition-all duration-300">
                        <IconCart />
                        Add to Cart
                      </Button>
                      <Button className="w-1/2 bg-tertiary-color text-primary-color px-4 py-2 rounded-xl hover:bg-tertiary-color cursor-pointer active:scale-95 transition-all duration-300">
                        Buy with Credit Card
                      </Button>
                    </div>

                    <button className="uppercase text-sm font-semibold text-primary-color flex items-center gap-1 cursor-pointer">
                      <IconHeart />
                      <span className="underline">Add to wishlist</span>
                    </button>
                    {/* share buttons  */}
                    <div className="flex items-center gap-3">
                      <FacebookShareButton
                        url={product.shareUrl}
                        title={product.name}
                      >
                        <FacebookIcon size={24} round />
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={product.shareUrl}
                        title={product.name}
                      >
                        <WhatsappIcon size={24} round />
                      </WhatsappShareButton>
                      <ViberShareButton
                        url={product.shareUrl}
                        title={product.name}
                      >
                        <ViberIcon size={24} round />
                      </ViberShareButton>
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-sm font-bold text-primary-color">
                        SKU {product.sku}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-2 py-2 text-center text-sm text-muted-foreground">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`inline-block h-1.5 rounded-full mx-1 ${
              index === current - 1 ? "bg-red-500 w-10" : "bg-gray-300 w-4"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default PromotionSection;
