import DesignCard from "./DesignCard";

const designCards = [
  {
    id: "1",
    image: "/conc.jpg",
    title: "Smart Design",
    description:
      "We create functional, aesthetic, and eco-friendly architectural plans tailored to your vision.",
  },
  {
    id: "2",
    image: "/cons.jpg",
    title: "Efficient Execution",
    description:
      "We ensure seamless coordination, precise engineering, and sustainable materials for a flawless build.",
  },
  {
    id: "3",
    image: "/bp.jpg",
    title: "Sustainable Completion",
    description:
      "Delivering a high-quality, future-ready space that balances innovation, efficiency, and long-term value.",
  },
];

export default function Steps() {
  return (
    <>
      {designCards.map((item) => (
        <DesignCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}
