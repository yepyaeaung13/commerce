"use client";

import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/components/home/PromotionSection";
import React, { useEffect } from "react";
import Image from "next/image";
import IconClock from "@/components/icons/IconClock";
import IconStar from "@/components/icons/IconStar";
import { Button } from "@/components/ui/button";
import IconCart from "@/components/icons/IconCart";
import IconHeart from "@/components/icons/IconHeart";
import {
  FacebookIcon,
  FacebookShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import dynamic from "next/dynamic";
import ProductSection from "@/components/home/ProductSection";

const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const product: Product = {
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
};

export default function ProductDetails() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading skeleton
  }

  return (
    <section className="p-5 bg-white rounded-xl">
      <div className="">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => router.back()}
                className="text-xl text-primary-color cursor-pointer"
              >
                Back
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl text-primary-color">
                Product detail
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-10 mt-10">
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
              <span className="text-2xl">{product.promotion.percent}</span>%
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
              <FacebookShareButton url={product.shareUrl} title={product.name}>
                <FacebookIcon size={24} round />
              </FacebookShareButton>
              <WhatsappShareButton url={product.shareUrl} title={product.name}>
                <WhatsappIcon size={24} round />
              </WhatsappShareButton>
              <ViberShareButton url={product.shareUrl} title={product.name}>
                <ViberIcon size={24} round />
              </ViberShareButton>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-primary-color">
                SKU {product.sku}
              </h2>
              <p className="text-xs text-gray-500">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductSection title="Similar products" />
      </div>
    </section>
  );
}
