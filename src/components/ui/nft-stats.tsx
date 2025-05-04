import * as React from "react";
import Pricing from "@/components/ui/pricing";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

interface nftstatsProps {
  title: string;
  number: number | string;
  isPrice?: boolean;
}

const nftstats: React.FC<nftstatsProps> = ({
  title,
  number,
  isPrice = false,
}) => {
  return (
    <Card className="p-0 bg-transparent">
      <CardContent>
        <div className="grid grid-cols-1 flex-col">
          <CardTitle className="text-white/30 text-[12px]">{title}</CardTitle>
          <p className="text-white text-[16px]flex items-center">
          {isPrice && typeof number === "number" ? (
              <Pricing amount={number} />
            ) : (
              number
            )}
            
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default nftstats;
