"use client";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { removeFromCart } from "@/store/features/cartSlice";
import { Trash2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "applications/json" },
        body: JSON.stringify({ cartItems }),
      });
      if (!res.ok) {
        throw new Error("Failed");
      }
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-slate-700 px-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <div>
          {!cartItems || cartItems.length === 0 ? (
            <p>You cart is empty</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between p-8 items-center"
                >
                  <div className="flex flex-col">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                    <p className="font-bold text-lg mt-8">{`Total Amount: $${totalAmount}`}</p>
                    <Button
                      size={"sm"}
                      className="w-sm mt-8 hover:cursor-pointer"
                      onClick={handleCheckout}
                    >
                      Check out
                    </Button>
                  </div>
                  <div>
                    <Trash2Icon
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
