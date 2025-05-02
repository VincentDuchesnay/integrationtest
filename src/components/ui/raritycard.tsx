import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
      <Card className="w-[181px]">
        <CardContent>
          <div className="flex justify-between gap-[24px]">
            <div className="grid grid-cols-1 flex-col">
              <p className="text-white/30 text-[12px]">Rarity</p>
              <p className="text-white text-[15px]">{rarity}</p>
            </div>
            <div className="grid grid-cols-1 flex-col">
              <p className="text-white/30 text-[12px]">Number</p>
              <p className="text-white/30 text-[12px]">{pourcent}%</p>
          </div>
          </div>
        </CardContent>
      </Card>
    );
  };
  
  export default raritycard;