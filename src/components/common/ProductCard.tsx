import Image from "next/image";
import * as motion from "motion/react-client";
import { useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function ProductCard({ index, handleAddToCart }: { index: number, handleAddToCart: (product: { image: string }, rect: DOMRect) => void }) {
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);

  const handleAdd = () => {
    const img = imgRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      handleAddToCart({ image: "/category/category1.png" }, rect);
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onClick={() => router.push(`/products/${index}`)}
      className="bg-white shadow-sm hover:shadow-md text-center cursor-pointer rounded-lg p-4"
    >
      <Image
        ref={imgRef}
        src="/category/category1.png"
        alt="Product 1"
        width={200}
        height={200}
        className="w-full h-32 object-cover rounded-lg mb-2"
      />
      <div className="space-y-2 mt-5">
        <h1 className="font-semibold text-primary-color">Vegetables</h1>
        <p className="text-primary-color font-bold text-lg">$10.00</p>
        <Button
          className="bg-tertiary-color text-primary-color font-medium hover:bg-tertiary-color cursor-pointer active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add your buy with credit card logic here
            handleAdd();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}
