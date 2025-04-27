"use client";

import Link from "next/link";
import IconMore from "../icons/IconMore";
import { Button } from "../ui/button";
import Image from "next/image";
import { categories, Category } from "./Category";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { useFlyCart } from "@/context/FlyCartContext";
import * as motion from "motion/react-client";

function BestSellingSection() {
  const { cartRef, setFlyData } = useFlyCart();

  const [activeCategory, setActiveCategory] = useState<Category | null>(
    categories[0]
  );

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

    const handleAddToCart = (product: { image: string }, startRect: DOMRect) => {
      const endRect = cartRef.current?.getBoundingClientRect();
  
      if (startRect && endRect) {
        setFlyData({
          start: startRect,
          end: endRect,
          src: product.image,
        });
      }
  
      // TODO: Add product to cart logic
    };

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-color">
          Weekly best selling items
        </h1>
        <Link
          href={"/products"}
          className="text-sm text-red-500 font-semibold flex items-center gap-2"
        >
          See more <IconMore className="size-4 fill-red-500" />
        </Link>
      </div>

      <div className="flex gap-2 mt-5">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className={cn(
              "bg-white text-primary-color hover:bg-accent-color hover:text-white rounded-2xl cursor-pointer active:scale-95 duration-200",
              category.id === activeCategory?.id && "bg-accent-color text-white"
            )}
            onClick={() => handleCategoryClick(category)}
          >
            <span className="text-sm font-semibold">{category.name}</span>
          </Button>
        ))}
      </div>

      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-5 gap-4 mt-10"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <ProductCard
            key={index}
            index={index}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default BestSellingSection;
