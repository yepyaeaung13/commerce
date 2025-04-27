"use client";

import Link from "next/link";
import IconMore from "../icons/IconMore";
import ProductCard from "../common/ProductCard";
import { useFlyCart } from "@/context/FlyCartContext";
import * as motion from "motion/react-client";

function ProductSection({
  title,
  seeMoreLink,
}: {
  title: string;
  seeMoreLink?: string;
}) {
  const { cartRef, setFlyData } = useFlyCart();

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
        <h1 className="text-2xl font-bold text-primary-color">{title}</h1>
        {seeMoreLink && (
          <Link
            href={seeMoreLink}
            className="text-sm text-red-500 font-semibold flex items-center gap-2"
          >
            See more <IconMore className="size-4 fill-red-500" />
          </Link>
        )}
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

export default ProductSection;
