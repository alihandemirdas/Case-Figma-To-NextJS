import { TrendingUp, TrendingDown } from "lucide-react";

interface CardProps {
  title: string;
  value: string;
  change: string;
}

const Card = ({ title, value, change }: CardProps) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="flex flex-col items-start bg-white shadow-md rounded-lg px-[30px] py-[20px] w-full sm:w-1/5 gap-y-[1px]">
      <p className="text-[16px] text-[#878787] font-normal">{title}</p>
      <p className="text-[28px] font-bold text-[#202020]">{value}</p>
      <div className="flex items-center gap-x-1">
        {isPositive ? (
          <TrendingUp size={16} className="text-[#89D233]" />
        ) : (
          <TrendingDown size={16} className="text-[#F27277]" />
        )}
        <p
          className={`text-[16px] font-bold ${
            isPositive ? "text-[#89D233]" : "text-[#F27277]"
          }`}
        >
          {change}
        </p>
      </div>
    </div>
  );
};

export default Card;