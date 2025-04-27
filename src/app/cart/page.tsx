"use client";

import IconDeliveryMap from "@/components/icons/IconDeliveryMap";
import IconEdit from "@/components/icons/IconEdit";
import IconMinus from "@/components/icons/IconMinus";
import IconPlus from "@/components/icons/IconPlus";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartPage() {
  const router = useRouter();
  const [isConfirmOrder, setIsConfirmOrder] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white px-10 py-5 rounded-xl">
      <span className="sr-only"> Breadcrumb </span>
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
                Cart Detail
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full flex gap-5 mt-5">
        <div className="w-1/2">
          <span className="sr-only"> Delivery information </span>
          <div className="w-full border p-5 rounded-md shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold text-primary-color">
                Delivery infomation
              </h1>
              <Link
                href={"/address"}
                className="text-sm text-red-500 flex items-end gap-1"
              >
                <IconEdit />
                Edit
              </Link>
            </div>
            <div className="mt-5 flex gap-2">
              <IconDeliveryMap />
              <div className="text-xs text-gray-500">
                <h3 className="font-bold text-sm text-primary-color">
                  Delivery to
                </h3>
                <p className="mt-1">
                  No-123, Moe Kaung Road, Yankin Township, Yangon
                </p>
                <p className="">Phone: 09898626060</p>
              </div>
            </div>
          </div>

          <span className="sr-only"> Items in cart </span>
          <div className="w-full mt-5 border p-5 rounded-md shadow-md">
            <h1 className="text-lg font-bold text-primary-color">
              Items in cart
            </h1>

            <div className="mt-5 grid grid-cols-1 gap-3 pl-3 pr-10 max-h-72 overflow-y-auto">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="bg-gray-card-color rounded-lg flex gap-3 items-center p-2"
                >
                  <Image
                    src={"/category/category1.png"}
                    alt="product"
                    width={100}
                    height={100}
                    className="w-12"
                  />
                  <div className="w-full flex justify-between items-center">
                    <div className="text-primary-color text-sm font-semibold">
                      <h1>Beetroot</h1>
                      <p>17.00</p>
                    </div>
                    <div className="flex gap-2 mr-5">
                      <button className="cursor-pointer active:scale-95 duration-200">
                        <IconMinus />
                      </button>
                      <span>1</span>
                      <button className="cursor-pointer active:scale-95 duration-200">
                        <IconPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/2 border p-5 rounded-md shadow-md">
          <h1 className="text-lg font-bold text-primary-color">
            Order summary
          </h1>
          <div className="p-5 mr-16 text-sm">
            <span className="sr-only"> Total amount </span>
            <div>
              <p className="flex justify-between border-b pt-3">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-primary-color">$ 37.58</span>
              </p>
              <p className="flex justify-between border-b pt-3">
                <span className="text-gray-500">Delivery fees</span>
                <span className="font-bold text-primary-color">$ 37.58</span>
              </p>
              <p className="flex justify-between border-b pt-3">
                <span className="text-gray-500">Coupon Discount</span>
                <span className="font-bold text-primary-color">$ 37.58</span>
              </p>
              <p className="flex justify-between border-b pt-3">
                <span className="text-gray-500">Taxes</span>
                <span className="font-bold text-primary-color">$ 37.58</span>
              </p>
              <p className="text-lg font-bold flex justify-between border-b-2 border-primary-color pt-5">
                <span className="text-primary-color">Total</span>
                <span className="text-primary-color">$ 100.58</span>
              </p>
            </div>

            <span className="sr-only"> Choose Payment </span>
            <div className="mt-5">
              <h2 className="text-primary-color font-bold">
                Choose Payment method
              </h2>
              <RadioGroup defaultValue="option-one" className="mt-3">
                <div className="flex items-center space-x-2 text-primary-color">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="option-one" className="cursor-pointer">
                    Online Payment
                  </label>
                </div>
                <div className="flex items-center space-x-2 text-primary-color">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <label htmlFor="option-two" className="cursor-pointer">
                    Cash on delivery
                  </label>
                </div>
              </RadioGroup>
            </div>

            <span className="sr-only"> Coupon and order button </span>
            <div className="mt-5 space-y-3">
              <div className="flex gap-2">
                <Input type="text" placeholder="Enter coupon code" />
                <Button
                  variant={"outline"}
                  className="bg-tertiary-color text-primary-color cursor-pointer active:scale-95"
                >
                  use
                </Button>
              </div>
              <Button
                onClick={() => setIsConfirmOrder(true)}
                variant={"outline"}
                className="w-full bg-tertiary-color font-bold text-primary-color cursor-pointer active:scale-95"
              >
                Order Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only"> order confirm dialog </span>
      <ConfirmOrder isConfirmOrder={isConfirmOrder} setIsConfirmOrder={setIsConfirmOrder}  />
    </section>
  );
}

function ConfirmOrder({ isConfirmOrder, setIsConfirmOrder}: { isConfirmOrder: boolean; setIsConfirmOrder: (value: boolean) => void }) {
  return (
    <Dialog open={isConfirmOrder} onOpenChange={setIsConfirmOrder}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
