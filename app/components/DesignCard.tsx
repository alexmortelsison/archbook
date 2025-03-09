import Image from "next/image";

interface DesignCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function DesignCard({
  image,
  title,
  description,
}: DesignCardProps) {
  return (
    <div className="border rounded-4xl shadow-md">
      <div className="p-8">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-xl object-cover h-[400px] w-full"
        />
        <h3 className="mt-8 text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
    </div>
  );
}
