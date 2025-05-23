import Card from "./Card";

export default function CardHeader() {
  const cards = [
    { title: "Active Products", value: "247,384", change: "+15%" },
    { title: "New Products", value: "+2,368", change: "+2%" },
    { title: "Completed Order", value: "33,847", change: "-4.5%" },
    { title: "Pending Payment", value: "1,284", change: "+5%" },
    { title: "Canceled Order", value: "836", change: "-2%" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-y-[30px] sm:gap-x-[30px]">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          change={card.change}
        />
      ))}
    </div>
  );
}
