import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 mx-auto min-h-screen mt-8 gap-x-24">
      <h1 className="text-white font-extrabold text-6xl w-[700px] mt-44 tracking-tighter">
        Build Your Vision with Precision
        <p className="text-muted-foreground text-2xl pt-6 w-[600px] tracking-normal mb-16">
          Turn your ideas into reality with expert architectural planning — Book
          your architecture requirements effortlessly.
        </p>
        <Button className="tracking-normal w-[200px]">Book now</Button>
      </h1>
      <Image
        src={"/house5.avif"}
        alt="house"
        width={2000}
        height={2000}
        className="object-cover h-[700px] w-full rounded-bl-[300px] rounded-tr-4xl mt-8 pb-8"
      />
    </div>
  );
}
