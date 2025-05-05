import * as React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface RarityCardProps {
  rarity: string;
  number: number;
  pourcent: number;
}

const RarityCard: React.FC<RarityCardProps> = ({
  rarity,
  number,
  pourcent,
}) => {
  return (
    <Card className="lg:w-[181px] md:w-[181px] sm:w-full">
      <CardContent>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-white/30 text-[12px] font-jura">Rarity</p>
            <p className="text-white text-[15px] font-jura">{rarity}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-white/30 text-[12px] font-jura">{number}</p>
            <p className="text-white/30 text-[12px] font-jura">{pourcent}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RarityCard;
