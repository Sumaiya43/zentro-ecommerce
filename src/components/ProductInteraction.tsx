"use client";

import useCartStore from "@/stores/useCartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "decreament" | "increament") => {
    if (type === "increament") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    });
    toast.success("Product Added Successfully!");
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Size</span>
        <div className="flex gap-2 items-center">
          {product.sizes.map((size) => (
            <div
              key={size}
              onClick={() => handleTypeChange("size", size)}
              className={`cursor-pointer border-1 p-[2px] flex text-center justify-center items-center ${
                selectedSize === size ? "border-gray-600" : "border-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Color</span>
        <div className="flex gap-2 items-center">
          {product.colors.map((color) => (
            <div
              key={color}
              onClick={() => handleTypeChange("color", color)}
              className={`cursor-pointer border-1 p-[2px] flex text-center justify-center items-center ${
                selectedColor === color ? "border-gray-300" : "border-white"
              }`}
            >
              <div className="w-6 h-6" style={{ backgroundColor: color }}></div>
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className=" cursor-pointer border-1 border-gray-300 p-1 hover:bg-black"
            onClick={() => handleQuantityChange("decreament")}
          >
            <Minus className="w-4 h-4 hover:text-white" />
          </button>
          <span>{quantity}</span>
          <button
            className=" cursor-pointer border-1 border-gray-300 p-1 hover:bg-black"
            onClick={() => handleQuantityChange("increament")}
          >
            <Plus className="w-4 h-4 hover:text-white" />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="cursor-pointer bg-gray-800 text-white px-4 py-3 rounded-md shadow-lg flex items-center justify-center gap-2 text-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        Add to Cart
      </button>
      <button className="cursor-pointer ring-1 ring-gray-500 px-4 py-2 shadow-lg rounded-md flex items-center justify-center gap-2 text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button>
    </div>
  );
};

export default ProductInteraction;
