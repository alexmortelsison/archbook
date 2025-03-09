"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

interface PricingProps {
  item: PriceProps[];
}

interface PriceProps {
  id: string;
  title: string;
  description: string;
  price: number;
}

const Pricing = ({ item }: PricingProps) => {
  const dispatch = useDispatch();

  const handleCheckout = (plan: PriceProps) => {
    dispatch(addToCart(plan));
    toast.success("Successfully added to cart!");
  };
  return (
    <div className="max-w-7xl mx-auto">
      <p className="font-bold text-4xl mb-8">Pricing</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {item.map((plan) => (
          <div
            key={plan.id}
            className="border h-[500px] bg-slate-800 justify-between items-center flex flex-col px-8 rounded-2xl"
          >
            <h2 className="text-white text-2xl text-center px-2 h-[80px] pt-8">
              {plan.title}
            </h2>
            <p className="text-4xl text-white font-bold mt-8 h-[40px]">
              ${plan.price}
            </p>
            <p className="text-muted-foreground">One Time Payment</p>
            <p className="text-center text-gray-300 px-8 mt-8 ">
              {plan.description}
            </p>
            <Button
              onClick={() => handleCheckout(plan)}
              className="mb-16 cursor-pointer"
            >
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
