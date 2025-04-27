import Image from "next/image";
import IconMore from "../icons/IconMore";
import Link from "next/link";

export type Category = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Vegetables",
    description: "Local market",
    imageUrl: "/category/category1.png",
  },
  {
    id: 2,
    name: "Fruits",
    description: "Camical free",
    imageUrl: "/category/category2.png",
  },
  {
    id: 3,
    name: "Meats",
    description: "Description",
    imageUrl: "/category/category3.png",
  },
  {
    id: 4,
    name: "Bakery",
    description: "Description",
    imageUrl: "/category/category4.png",
  },
  {
    id: 5,
    name: "Diary & Eggs",
    description: "Description",
    imageUrl: "/category/category5.jpg",
  },
];

function Category() {
  return (
    <section className="mt-3">
      <div className="flex gap-4 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white w-46 h-24 rounded-lg shadow-sm p-3"
          >
            <div className="flex flex-col">
              <Image
                src={category.imageUrl}
                alt={category.name}
                width={100}
                height={100}
                className="w-14 h-14 rounded-full absolute bottom-2 right-2"
              />
              <h3 className="font-semibold text-primary-color">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}

        <Link href={"/category"} className="bg-tertiary-color text-white w-24 h-24 rounded-lg flex items-center justify-center active:scale-95 duration-200">
          <span
            className="flex flex-col items-center bg-white rounded-full p-2"
          >
            <IconMore className="size-6 fill-primary-color" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Category;
