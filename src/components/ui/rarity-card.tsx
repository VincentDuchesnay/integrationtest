import * as React from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface raritycardProps{
    rarity: string;
    number: number;
    pourcent: number;
  }

const raritycard: React.FC<raritycardProps> = ({
    rarity,
    number,
    pourcent,
  }) => {
    return (
      <Card className="w-[181.03px]">
        <CardContent>
          <div className="grid grid-cols-[repeat(2,_auto)] justify-between">
            <div className="grid grid-cols-1">
              <p className="text-white/30 text-[12px]">Rarity</p>
              <p className="text-white text-[15px]">{rarity}</p>
            </div>
            <div className="grid grid-cols-1">
              <p className="text-white/30 text-[12px]">{number}</p>
              <p className="text-white/30 text-[12px]">{pourcent}%</p>
          </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default raritycard;