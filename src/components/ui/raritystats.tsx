import * as React from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface raritystatsProps {
  title: string;
  rarity: string;
}

const raritystats: React.FC<raritystatsProps> = ({
  title,
  rarity,
}) => {
  return (
    <div>
      <h3 className="text-[15px] font-default text-white/30">{title}</h3>
      <div className="flex text-[16px] font-bold text-white">
        {rarity}
      </div>
    </div>
  );
};

export default raritystats;
