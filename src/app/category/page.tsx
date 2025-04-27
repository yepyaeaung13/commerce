"use client";

import { categories, Category } from "@/components/home/Category";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import ProductCard from "@/components/common/ProductCard";
import { useFlyCart } from "@/context/FlyCartContext";
import { useRouter } from "next/navigation";

export default function CategoryPage() {
  const router = useRouter();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="bg-white p-5 rounded-xl">
        <div className="mt-2">
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
                  All category
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="mt-5">
          <div className="flex justify-between mt-5">
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={cn(
                    "bg-white text-primary-color hover:bg-accent-color hover:text-white rounded-2xl cursor-pointer active:scale-95 duration-200",
                    category.id === activeCategory?.id &&
                      "bg-accent-color text-white"
                  )}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="text-sm font-semibold">{category.name}</span>
                </Button>
              ))}
            </div>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
            {Array.from({ length: 15 }, (_, index) => (
              <ProductCard
                key={index}
                index={index}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}
